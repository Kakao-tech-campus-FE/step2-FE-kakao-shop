import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../Atoms/Container";
import Box from "../Atoms/Box";
import { Button, Card } from "react-bootstrap";
import { comma } from "../../Utils/convert";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateCart } from "../../Servicies/cart";
import CartItem from "../Atoms/CartItem";

const CartList = ({ data }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);
  const initPayload = useRef([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountInludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity;
      });
    });
    return comma(count);
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리하는 함수
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션의 수량
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
    <Container>
      <Box>
        <h1>장바구니</h1>
      </Box>
      <Card>
        {/* 상품명 장바구니 */}
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount} // 개수 변경
              />
            );
          })}
      </Card>
      <Card>
        <div className="row">
          <span className="expect">주문 예상금액</span>
          <div className="sum-price">{comma(totalPrice)}원</div>
        </div>
      </Card>
      <Button
        className="order-btn"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              navigate.push("/order");
            },
            onError: (error) => {},
          });
        }}
      >
        <span>총 {getTotalCartCountInludeOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
