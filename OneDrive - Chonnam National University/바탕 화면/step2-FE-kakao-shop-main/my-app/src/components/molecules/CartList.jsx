import React, { useCallback, useEffect, useRef, useState } from "react"; // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useMutation } from "@tanstack/react-query";
import { updateCart } from '../../services/cart';

const CartList = ({ data }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [updatePayload, setUpdatePayload] = useState([]);
    // const initPayload = useRef([]);
    // const updatePayload = useRef([]);

    const navigate = useNavigate();

    const { mutate } = useMutation({
      mutationFn: updateCart,
    });

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
      }, [data]);

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        if (cartItems) {
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
            count += cart.quantity; // 개별 옵션에 해당
            });
        });
        }
        return comma(count);
    }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId : 옵션 id
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 가격
   */
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

  return (
    <Container className="cart-list">
      {/* 제목 */}
      <Box className="flex justify-center p-4">
        <h1>장바구니</h1>
      </Box>
      {/* 장바구니에 담긴 품목 카드 */}
      <Card>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <>
                <CartItem
                  key={item.id}
                  item={item}
                  onChange={handleOnChangeCount}
                />
                <br />
              </>
            );
          })}
      </Card>
      <br />
      {/* 주문 예상금액 박스 */}
      <Card>
        <div className="row border flex justify-between p-4">
          <div className="expect font-bold">주문 예상 금액</div>
          <div className="sum-price font-bold text-sky-600">
            {comma(totalPrice)}원
          </div>
        </div>
      </Card>
      {/* 주문하기 버튼 */}
      <Button
        className="order-btn bg-yellow-300 p-4 rounded-xl font-bold w-96 mt-4"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => { // eslint-disable-line no-unused-vars
              alert("상품 페이지로 이동합니다.");
              navigate("/order");
            },
            onError: (error) => { // eslint-disable-line no-unused-vars
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