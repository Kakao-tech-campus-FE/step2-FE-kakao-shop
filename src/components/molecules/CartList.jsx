import React, { useCallback, useEffect, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, updateCart } from "../../services/cart";
import Title from "../atoms/Title";

const CartList = () => {
  const { data } = useQuery(["cart"], getCart, {
    suspense: true,
  });

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
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
        <Title> 장바구니</Title>
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
      <div>
        <div className="row flex justify-between border p-4">
          <div className="">주문 예상 금액</div>
          <div className="mr-[15px] font-bold text-blue-600">
            {comma(totalPrice)}원
          </div>
        </div>
      </div>
      <Button
        className="p-2 font-bold text-center bg-yellow-300 rounded-md mt-10 ml-[3%] w-[95%]"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              alert("주문 페이지로 이동합니다.")
              navigate("/order");
            },
            onError: (error) => {
              alert("주문 페이지 이동에 실패했습니다.");
            },
          });
        }}
      >
        <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
