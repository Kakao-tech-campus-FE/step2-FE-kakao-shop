import React from 'react';
import type { ProductCartOption } from '../../../types/Product';
import OrderInfo from '../atoms/OrderInfo';

function OrderInfos({ options, productName }: { options: ProductCartOption[]; productName: string }) {
  return (
    <div className="p-2 border-b border-gray-200">
      <span className="font-medium">{productName}</span>
      {options.map((option) => (
        <OrderInfo key={option.id} productName={option.option.optionName} quantity={option.quantity} price={option.price} />
      ))}
    </div>
  );
}

export default OrderInfos;
