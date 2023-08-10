import React from 'react';
import { CartInfo } from '../../dto/productDto';
import { comma } from '../../utils/convert';

interface OrderOptionItemProps {
  cart: CartInfo;
}

const OrderOptionItem = ({ cart }: OrderOptionItemProps) => {
  return (
    <div className='space-y-2 border-t border-gray-100 p-4'>
      <p>{`[옵션] ${cart.option.optionName} ${cart.quantity}개`}</p>
      <strong>{comma(cart.option.price * cart.quantity)}원</strong>
    </div>
  );
};

export default OrderOptionItem;
