import React from 'react';
import { OrderedOptionData } from '@api/dto';
import InnerFlatCard from './InnerFlatCard';
import OrderedOption from './OrderedOption';

interface OptionItemProps {
  items: OrderedOptionData[];
}
const OptionItem = ({ items }: OptionItemProps) => {
  return (
    <>
      {items.map((item: OrderedOptionData, idx) => {
        return (
          <div key={item.id} className="my-2 space-y-2">
            <InnerFlatCard>
              <span className="font-bold mr-3">옵션 {idx + 1}</span>
              <OrderedOption optionName={item.optionName} quantity={item.quantity} price={item.price * item.quantity} />
            </InnerFlatCard>
          </div>
        );
      })}
    </>
  );
};

export default OptionItem;
