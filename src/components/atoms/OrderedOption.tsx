import React from 'react';
import comma from '@utils/commaUtils';
import PriceTag from './PriceTag';

interface OrderedOptionProps {
  optionName: string;
  quantity: number;
  price: number;
}

const OrderedOption = ({ optionName, quantity, price }: OrderedOptionProps) => {
  return (
    <div className="grid grid-cols-3 items-center mb-3">
      <div>{optionName}</div>
      <div className="text-right">{comma(quantity)}개</div>
      <div className="text-[12px] text-right">
        <PriceTag>{price}원</PriceTag>
      </div>
    </div>
  );
};

export default OrderedOption;
