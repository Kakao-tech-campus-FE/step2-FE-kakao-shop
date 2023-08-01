import { OrderedOptionData } from '@api/dto';
import React from 'react';

interface OptionItemProps {
  items: OrderedOptionData[];
}
const OptionItem = ({ items }: OptionItemProps) => {
  return (
    <>
      {items.map((item: OrderedOptionData, idx) => {
        return (
          <div key={item.id}>
            <div>옵션 {idx + 1}</div>
            <p>{item.optionName}</p>
            <div>구매 수량</div>
            <p>{item.quantity}</p>
            <div>금액(옵션 금액*수량)</div>
            <p>{item.price * item.quantity}</p>
          </div>
        );
      })}
    </>
  );
};

export default OptionItem;
