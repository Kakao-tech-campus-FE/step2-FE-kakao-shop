import React, { useEffect, useMemo, useState } from 'react';
import Box from './Box';
import Counter from './Counter';
import { comma } from '../../utils/convert';
import Card from './Card';
import Button from './Button';

// 각 상품별 장바구니 항목
// 여러 옵션이 저장된다.
const CartItem = ({ item, onChange, onDelete }) => {
  const totalMoney = useMemo(() => {
    const money = item.carts.reduce((acc, cur) => {
      return acc + cur.option.price * cur.quantity;
    }, 0);
    return money;
  }, [item.carts]);

  return (
    <Box className="cart-item-box">
      <h5>{item.productName}</h5>
      {item.carts.map((cart) => (
        // key : 옵션아이디
        <Card key={cart.id} className="cart">
          <div className="option-name">
            <span>{cart.option.optionName}</span>
          </div>
          <div className="row">
            <button
              onClick={() => {
                onDelete(cart.id, cart.quantity, cart.option.price);
              }}
            >
              {' '}
              삭제{' '}
            </button>
            <Counter
              value={cart.quantity}
              onIncrease={(count) => {
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price);
              }}
            />

            <div className="price">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Card>
      ))}
      <Card className="total-price">
        <div className="row">
          <h5>주문금액</h5>
          <div className="price">
            {/* item.carts = 옵션들이 저장된 배열 */}
            {comma(totalMoney)}원
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default CartItem;
