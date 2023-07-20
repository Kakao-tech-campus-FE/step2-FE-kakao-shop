import { useState, useEffect, useCallback, useRef } from "react";
import { Router, useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import "../../styles/molecules/CartList.css";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { updateCart } from "../../services/cart";
import { useMutation } from "react-query";

const CartList = ({ data }) => {
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  //useState에서 리턴되는 데이터에 따라서
  //Hook 을 제외한 모든 컴포넌트 내에 코드는 재할당, 메모리 선언

  // updatePayload : 렌더링에 관여하고 있는가? 렌더링에 관여 x 시 useState 사용할 필요 없음
  const initPayload = useRef([]); // DOM 에 접근할 때
  const { mutate } = useMutation({
    mutationFn: updateCart,
  });
  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; // 개별 옵션에 해당
      });
    });
    return count;
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션의 수량
   * @param {number} price : 옵션 금액
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
            return comma(cart);
          }),
        };
      });
    });
  };

  return (
    <Container className="cart-list">
      <Box>
        <h1>장바구니</h1>
      </Box>
      <Card>
        {/* {상품별 장바구니} */}
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
          // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우에)
          // post method

          // 1번째 방법
          // 전체 장바구니 목록의 개수를 적절히 파싱해서 페이로드로 보내주기

          // 2번째 방법.
          // 변경된 개수만 파싱해서 페이로드로 보내주기.
          // payload 더 작게 할 수 있으니
          mutate(updatePayload, {
            onSuccess: (data) => {
              // navigate to order page
              route.push("/order");
            },
            onError: (error) => {},
          });

          // navigate to order page
          // 결제 프로세스
          // 1. 장바구니에 있는 모든 항목 그대로 결제 페이지에 담김
          // 2. 결제 페이지에서는 수량 변경 x ,
        }}
      >
        <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
