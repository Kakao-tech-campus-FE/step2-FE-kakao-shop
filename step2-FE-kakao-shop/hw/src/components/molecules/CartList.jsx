import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import "../../styles/molecules/CartList.css";
import { useMutation, useQuery } from "react-query";
import { getCart, updateCart } from "../../services/cart";
import { useSelector } from "react-redux";

const CartList = ({ data }) => {
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);
  const isLogined = useSelector((state) => state.user.isLogined);
  // const updatePayload = useRef([]);
  // const initPayload = useRef([]);

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
          count += cart.quantity;
        });
      });
    }
    return comma(count);
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리하는 함수
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 금액
   */
  const handleOnChangeCount = (optionId, quantity, price) => {
    // 이 함수가 실행된 부분만 수량 변경이 생긴 것
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartId !== optionId);

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
          cart: item.carts.map((cart) => {
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
      <Box>
        <h1 className="text-3xl">장바구니</h1>
      </Box>
      <div className="flex flex-col gap-2 mb-4">
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount} // 개수 변경을 관리
              />
            );
          })}
      </div>
      <Card>
        <div className="row flex flex-col gap-2 mb-4">
          <span className="expect text-3xl">주문 예상금액</span>
          <div className="sum-price text-2xl">{comma(totalPrice)}원</div>
        </div>
      </Card>
      <Button
        className="order-btn w-full py-4 text-black font-bold text-xl bg-yellow-400"
        onClick={() => {
          // update cart
          // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우)
          // post method
          // 변경된 개수만 파싱해서 페이로드로 보내주기

          mutate(updatePayload, {
            onSuccess: (data) => {},
            onError: (error) => {},
          });

          // navigate to order page
          // 주문 페이지로 이동
          route("/order");
        }}
      >
        <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
