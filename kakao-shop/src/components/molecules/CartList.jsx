import { useState, useEffect, useCallback, useRef } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
import Container from '../atoms/Container';
import Box from '../atoms/Box';
import CartItem from '../atoms/CartItem';
import Card from '../atoms/Card';
import Button from '../atoms/Button';

import { updateCart } from '../../services/cart';
import { comma } from '../../utils/convert';
import { useMutation } from 'react-query';

const CartList = ({ data }) => {
  // hook을 제외한 모든 컴포넌트 내에 코드는 재할당, 메모리 선언
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatepayload] = useState([]); // 렌더링에 관여 X
  // updatePayload: 렌더링에 관려하고 있는가?

  const initPayload = useRef([]); // DOM에 접근할 때 [{cardId, quantity}]
  const { mutate } = useMutation({ mutationFn: updateCart });

  useEffect(() => {
    // validate 또는 구조분해할당
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludingOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; // 개별 옵션에 해당
      });
    });
    return count;
  }, [cartItems]); // cartItems이 변경될 때 실행

  /**
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 가격
   * @returns
   */
  const handleOnChangeCount = (optionId, quantity, price) => {
    // 이 함수가 실행된 부분만 수량 변경이 생긴 것
    setUpdatepayload((prev) => {
      const isExist = prev.find((item) => item.cardId === optionId);

      if (isExist) {
        return [
          ...prev.filter((item) => item.cardId !== optionId),
          {
            cardId: optionId,
            quantity,
          },
        ];
      }

      return [
        ...prev,
        {
          cardId: optionId,
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
    <Container className="cart-list">
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
                onChange={handleOnChangeCount} // 개수변경을 고나리하는 props
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
          // update api
          // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우에)

          // post method

          // 1번째 방법
          // 전체 장바구니 목록의 개수를 적절히 파싱해서 페이로드로 보내주기

          // 2번째 방법
          // 변경된 개수만 파싱해서 페이로드로 보내주기
          // payload 더 작게할 수 있으니
          mutate(updatePayload, {
            onSuccess: (data) => {
              route.push('/order');
            },
            onError: (error) => {},
          });
          // navigate to order page
          // 주문 페이지로 이동

          // 결제 프로세스
          // 1. 장바구니에 있는 모든 항복 그대로 결제 페이지에 담김
          // 2. 결제 페이지에서는 수량 변경 X 그대로 결제 진행만 가능
        }}
      >
        <span>총 {getTotalCartCountIncludingOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
