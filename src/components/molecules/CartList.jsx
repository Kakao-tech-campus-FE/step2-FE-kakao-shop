import React, { useCallback, useEffect, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, updateCart } from "../../services/cart";
import Title from "../atoms/Title";

const staticServerUri = process.env.REACT_APP_PATH || "";

const CartList = () => {
  const { data } = useQuery(["cart"], getCart, {
    suspense: true,
  });

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  /**
   * 장바구니 담기 에러 캐칭 시나리오
   * 1. 401 에러
   *    로그인 정보가 없어 헤더에 authorization이 없는 경우 401 에러를 처리하여 로그인 페이지로 이동한다.
   * 2. 404 에러
   *    페이지를 찾을 수 없는 경우, NotFoundPage(404)로 이동한다.
   * 3. 서버 에러 
   *    서버 요청 실패의 경우 alert창을 띄운다.
   */

  const { mutate } = useMutation({
    mutationFn: updateCart,
    onError: (error) => {
      if (error.response && error.response.status === 401) {
        // 로그인 정보가 없어 헤더에 authorization이 없는 경우 401 에러를 처리하여 로그인 페이지로 이동한다.
        alert("로그인 정보가 없습니다. 로그인 페이지로 이동합니다.");
        navigate(staticServerUri + "/login");
      } else if (error.response && error.response.status === 404) {
        // 페이지를 찾을 수 없는 경우 404 페이지로 이동한다.
        alert("페이지를 찾을 수 없습니다. 404 페이지로 이동합니다.");
        navigate(staticServerUri + "/*");
      } else {
        // 서버 에러의 경우 alert창을 띄운다.
        alert("주문에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });

  useEffect(() => {
    setCartItems(data.data.response.products);
    setTotalPrice(data.data.response.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; 
      });
    });
    return comma(count);
  }, [cartItems]);

  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartId === optionId);
      if (isExist) {
        return [
          ...prev.filter((item) => item.cartId !== optionId),
          {
            cartId: optionId,
            quantity,
          },
        ];
      }
      return [
        ...prev,
        {
          cartId: optionId,
          quantity,
        },
      ];
    });
    setTotalPrice((prev) => prev + price);
    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return { ...cart, quantity };
            }
            return cart;
          }),
        };
      });
    });
  };

  const handleOnDeleteOption = useCallback((optionId, quantity, price) => {
    setUpdatePayload((prev) => {
        const isExist = prev.find((item) => item.cartId === optionId);

        if(isExist) {
            return [
                ...prev.filter((item) => item.cartId !== optionId),
                {
                    cartId: optionId,
                    quantity: 0,
                }
            ]
        };

        return[
            ...prev,
            {
                cartId: optionId,
                quantity: 0,
            }
        ]
    });
    setTotalPrice((prev) => prev - price * quantity);
    setCartItems((prev) => {
        return prev.map((item) => {
            return {
                ...item,
                carts: item.carts.map((cart) => {
                    if(cart.id === optionId) {
                        return {...cart, quantity: 0};
                    }
                    return cart;
                })
            }
        })
    });
}, [cartItems]);

  return (
    <Container className="cart-list">
      <Box>
        <Title className="ml-[100px]"> 장바구니</Title>
      </Box>
      <div>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <>
                <CartItem
                  key={item.id}
                  item={item}
                  onChange={handleOnChangeCount}
                  onDelete={handleOnDeleteOption}
                />
              </>
            );
          })}
      </div>
      <div className="row flex justify-between border p-4 ml-[100px]">
          <div>주문 예상 금액</div>
          <div className="mr-[15px] font-bold text-blue-600">
            {comma(totalPrice)}원
          </div>
        </div>
      
      <Button
        className="p-2 font-bold text-center bg-yellow-300 rounded-md mt-10 ml-[100px] w-[94%]"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              navigate(staticServerUri + "/order");
            },
            onError: (error) => {
              alert("주문 페이지 이동에 실패했습니다.");
            },
          });
        }}
      >
        <span>주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
