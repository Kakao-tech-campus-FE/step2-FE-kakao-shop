import { useState, useEffect, useCallback, useRef } from "react";
import { Router, useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import "../../styles/CartList.css";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";

const CartList = ({ data }) => {
  const route = useNavigate();
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

  const getTotalCartCounteIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity;
      });
    });
    return comma(count);
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경 관리
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 가격
   */
  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartid === optionId);

      if (isExist) {
        return [
          ...prev.filter((item) => item.cartid !== optionId),
          {
            cartid: optionId,
            quantity,
          },
        ];
      }
      return [
        ...prev,
        {
          cartid: optionId,
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
              return {
                ...cart,
                quantity,
              };
            }
            return cart;
          }),
        };
      });
    });
  };
  return (
    <Container className="cart-List">
      <Box>
        <h1>장바구니</h1>
      </Box>
      <Card>
        {/* 상품별 장바구니 */}
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount}
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
          // update cart api
          // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우)
          //post method

          mutate(updatePayload, {
            onSuccess: (data) => {
              //navigate to order page
              route.push("/order");
            },
            onError: (error) => {},
          });
        }}
      >
        <span>총 {getTotalCartCounteIncludeOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
