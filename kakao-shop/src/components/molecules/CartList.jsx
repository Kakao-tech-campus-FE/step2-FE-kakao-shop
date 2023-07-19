import { useState, useEffect, useCallback, useRef } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
import Container from '../atoms/Container';
import Box from '../atoms/Box';
import CartItem from '../atoms/CartItem';
import Card from '../atoms/Card';
import Button from '../atoms/Button';

import { updateCart } from '../../apis/cart';
import { comma } from '../../utils/convert';
import { useMutation } from 'react-query';
import GrayBox from '../atoms/GrayBox';

const CartList = ({ data }) => {
  // hook을 제외한 모든 컴포넌트 내에 코드는 재할당, 메모리 선언
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatepayload] = useState([]);

  const initPayload = useRef([]); // DOM에 접근할 때 [{cardId, quantity}]
  const { mutate } = useMutation({ mutationFn: updateCart });

  console.log('data>>', data);
  useEffect(() => {
    // validate 또는 구조분해할당
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludingOptions = useCallback(() => {
    let count = 0;
    cartItems &&
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
      <Box>
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
      </Box>
      <GrayBox name="주문 예상금액" value={`${comma(totalPrice)}원`} />
      <Button
        color="kakao"
        className="order-btn"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              route.push('/order');
            },
            onError: (error) => {},
          });
        }}
      >
        <span>총 {getTotalCartCountIncludingOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
