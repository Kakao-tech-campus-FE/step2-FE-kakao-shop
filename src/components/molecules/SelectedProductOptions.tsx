import React from 'react';
import { AddCart, OptionInfo } from '../../dto/productDto';
import Counter from '../atoms/Counter';
import { comma } from '../../utils/convert';

interface SelectedProductOptionsProps {
  selectedOptions: OptionInfo[];
  cartOptions: AddCart[];
  setCartOptions: React.Dispatch<React.SetStateAction<AddCart[]>>;
}

const SelectedProductOptions = ({ selectedOptions, cartOptions, setCartOptions }: SelectedProductOptionsProps) => {
  const handleDecrementClick = (id: number) => {
    setCartOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.optionId === id) {
          return { ...option, quantity: option.quantity - 1 };
        }
        return option;
      }),
    );
  };

  const handleIncrementClick = (id: number) => {
    setCartOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.optionId === id) {
          return { ...option, quantity: option.quantity + 1 };
        }
        return option;
      }),
    );
  };

  return (
    <div>
      {selectedOptions.map((option) => {
        const quantity = cartOptions.find((cartOption) => cartOption.optionId === option.id)?.quantity || 1;
        return (
          <div key={option.id} className='mt-3 bg-slate-50 p-5'>
            <p className='text-sm'>{option.optionName}</p>
            <div className='flex items-center justify-between pt-2'>
              <Counter
                quantity={quantity}
                onDecrementClick={() => handleDecrementClick(option.id)}
                onIncrementClick={() => handleIncrementClick(option.id)}
              />
              <p className='text-sm'>{comma(option.price * quantity)}원</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedProductOptions;
