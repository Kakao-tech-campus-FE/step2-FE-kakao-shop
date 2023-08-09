import React from 'react';

interface OrderInfoProps {
  productName: string;
  quantity: number;
  price: number;
}
function OrderInfo({ productName, quantity, price }: OrderInfoProps) {
  return (
    <div className="flex flex-col p-2 border border-gray-200 mt-2">
      <span className="font-medium">{productName}</span>
      <span>{quantity}개</span>
      <span>{price}원</span>
    </div>
  );
}

export default OrderInfo;
