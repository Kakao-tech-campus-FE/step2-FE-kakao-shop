import { CartProductData, CartedOptionData, ProductOptionData } from '@api/dto';
import Counter from '@components/atoms/Counter';
import { Card } from '@mui/material';
import comma from '@utils/commaUtils';
import React from 'react';

interface CartItemProps {
  item: CartProductData;
  onChange: (id: number, quantity: number, price: number) => void;
}

const CartItem = ({ item, onChange }: CartItemProps) => {
  return (
    <>
      <h5>{item.productName}</h5>
      {item.carts.map((cart: CartedOptionData) => (
        <Card>
          <div>
            {/** 선택된 옵션들 나열? */}
            <span>{cart.option.optionName}</span>
          </div>
          <div>
            <Counter
              value={cart.quantity}
              onIncrease={(count) => {
                // id, 변경된 수량, 해당 상품 가격
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price);
              }}
            />
          </div>
          <div>
            <span>{comma(cart.price)}원</span>
          </div>
        </Card>
      ))}
      <Card>
        <div>
          <h5>주문금액</h5>
          <div>
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.price;
              }, 0),
            )}
            원
          </div>
        </div>
      </Card>
    </>
  );
};

export default CartItem;
