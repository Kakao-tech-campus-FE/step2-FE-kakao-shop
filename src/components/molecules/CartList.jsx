import React, { useCallback, useEffect, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, updateCart } from "../../services/cart";

const staticServerUri = process.env.REACT_APP_PATH || "";

/**
 * @todo 
 */
const CartList = () => {
  const { data } = useQuery(["cart"], getCart, {
    suspense: true,
  });

  const [cartItems, setCartItems] = useState([]);
  const [updatePayload, setUpdatePayload] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data.data.response.products);
    setTotalPrice(data.data.response.totalPrice);
  }, [data]);

  useEffect(() => {
    mutate(updatePayload);
  }, [updatePayload]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;

    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; // 개별 옵션에 해당
      });
    });
    return comma(count);
  }, [cartItems]);

  /**
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 가격
   */
  const handleChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartId === optionId);
      // 기존에 값이 존재하면
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

  return (
    <Container className="cart-list w-[981px]">
      {/* 제목 */}
      <Box className="pl-4 pb-4">
        <h1 className="text-2xl font-bold">장바구니</h1>
      </Box>
      {/* 장바구니에 담긴 품목 카드 */}
      <Box>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleChangeCount}
              />
            );
          })}
      </Box>
      <hr />
      {/* 주문 예상금액 박스 */}
      <Box>
        <div className="row flex justify-between p-4 text-xl">
          <div className="expect font-bold">주문 예상 금액</div>
          <div className="sum-price font-bold text-sky-600">
            {comma(totalPrice)}원
          </div>
        </div>
      </Box>
      {/* 주문하기 버튼 */}
      <Button
        className="order-btn bg-yellow-300 p-4 rounded-xl font-bold w-full mt-4"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              navigate(staticServerUri + "/order");
            },
            onError: (error) => {
              alert("업데이트에 실패했습니다.");
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
