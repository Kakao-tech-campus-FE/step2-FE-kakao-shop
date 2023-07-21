/* eslint-disable */

import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../molecules/CartItem";
import comma from "../../utils/convert";
import Button from "../atoms/Button";
import { updateCart } from "../../api/cart";

const CartList = ({ data }) => {
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const handleOnChangeCount = useCallback(
    (optionId, quantity, price) => {
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
    },
    [cartItems]
  );

  const handleOnDeleteOption = useCallback(
    (optionId, quantity, price) => {
      setUpdatePayload((prev) => {
        const isExist = prev.find((item) => item.cartId === optionId);

        if (isExist) {
          return [
            ...prev.filter((item) => item.cartId !== optionId),
            {
              cartId: optionId,
              quantity: 0,
            },
          ];
        }
        return [
          ...prev,
          {
            cartId: optionId,
            quantity: 0,
          },
        ];
      });

      setTotalPrice((prev) => prev - quantity * price);
      setCartItems((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            carts: item.carts.map((cart) => {
              if (cart.id === optionId) {
                return { ...cart, quantity: 0 };
              }
              return cart;
            }),
          };
        });
      });
    },
    [cartItems]
  );

  return (
    <div className="bg-gray-100 mt-[80px] pb-[12px]">
      <Container className="cart-list max-w-none mx-auto w-[870px] bg-white">
        <Box className="sub-title h-[45px] py-[11px] border-b border-gray-100 text-[15px] font-bold text-center">
          장바구니
        </Box>
        <Box>
          {/* 상품별 장바구니 */}
          {Array.isArray(cartItems) &&
            cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  onChange={handleOnChangeCount}
                  onDelete={handleOnDeleteOption}
                />
              );
            })}
        </Box>
        <Box className="w-[870px] h-[60px] ">
          <div className="flex row mx-[16px]">
            <span className="expect mr-auto py-[16px] text-[18px] font-bold">
              주문 예상금액
            </span>
            <div className="total-price py-[17px] text-[16px] text-blue-500 font-bold">
              {comma(totalPrice)}원
            </div>
          </div>
        </Box>
        <Button
          className="order-button w-[870px] h-[54px] bg-yellow-kakao font-bold text-[16px]"
          onClick={() => {
            alert("주문하기 구현 예정");
            // 주문하기는 다음 주에 구현 예정!
            // 장바구니 정보를 수정하는 API 호출 (변경이 있는 경우에)
            // 주문 페이지로 이동
            // 결제 페이지에서는 수량 변경 X 그대로 결제 진행만 가능
            mutate(updatePayload, {
              onSuccess: (data) => {
                // navigate to order page
                route.push("/order");
              },
              onError: (error) => {},
            });
          }}
        >
          <span>{cartItems ? cartItems.length : 0}건 주문하기</span>
        </Button>
      </Container>
    </div>
  );
};

export default CartList;
