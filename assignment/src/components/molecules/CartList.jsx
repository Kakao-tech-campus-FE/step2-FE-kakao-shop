import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Container from '../atoms/Container';
import Box from '../atoms/Box';
import CartItem from '../atoms/CartItem';
import Card from '../atoms/Card';
import { comma } from '../../utils/convert';
import Button from '../atoms/Button';
import { updateCart } from '../../services/cart';

const CartList = ({ data }) => {
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data.products);
    setTotalPrice(data.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    const count = cartItems
      .flatMap((item) => item.carts)
      .reduce((total, cart) => total + cart.quantity, 0);
    return count;
  }, [cartItems]);
  // 옵션의 수량 변경과 가격 변경을 관리
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
  const handleOnDelete = (optionId, quantity, price) => {
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
    setTotalPrice((prev) => prev - price * quantity);
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
                onDelete={handleOnDelete}
                onChange={handleOnChangeCount}
                // 개수변경
              />
            );
          })}
      </Card>
      <Card>
        <div className="row">
          <span className="expect"> 주문 예상금액</span>
          <div className="sum-price">{comma(totalPrice)}원</div>
        </div>
      </Card>
      <Button
        className="order-btn"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              route('/order');
            },
            onError: (error) => {
              console.log('error', error);
              route('/error');
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
