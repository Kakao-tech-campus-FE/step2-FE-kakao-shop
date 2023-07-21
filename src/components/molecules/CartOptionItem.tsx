import React from 'react';
import Counter from '../atoms/Counter';
import LightButton from '../atoms/LightButton';
import { CartInfo } from '../../dto/productDto';
import { comma } from '../../utils/convert';

interface CartOptionItemProps {
  cart: CartInfo;
}

const CartOptionItem = ({ cart }: CartOptionItemProps) => {
  const handleDecrementClick = (id: number) => {
    // TODO
  };

  const handleIncrementClick = (id: number) => {
    // TODO
  };

  return (
    <div className='space-y-2 border p-3'>
      <p>{cart.option.optionName}</p>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-2'>
          <LightButton
            onClick={() => {
              // TODO
            }}
          >
            삭제
          </LightButton>
          <Counter
            quantity={cart.quantity}
            onDecrementClick={() => handleDecrementClick(cart.option.id)}
            onIncrementClick={() => handleIncrementClick(cart.option.id)}
          />
        </div>
        <strong>{comma(cart.price)}원</strong>
      </div>
    </div>
  );
};

export default CartOptionItem;
