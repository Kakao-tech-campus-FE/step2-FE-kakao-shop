import React from 'react';
import { ProductCartOption } from '../../../types/Product';
import CounterBtn from '../atoms/CounterBtn';
import { updateCart } from '../../../api/Products';
import { useQueryClient } from 'react-query';

function OptionCard({ option }: { option: ProductCartOption }) {
  const queryClient = useQueryClient();
  const quantityPlusHandler = async () => {
    await updateCart([{ cartId: option.id, quantity: option.quantity + 1 }]);
    queryClient.invalidateQueries('getCartData');
  };
  const quantityMinusHandler = async () => {
    await updateCart([{ cartId: option.id, quantity: option.quantity - 1 }]);
    queryClient.invalidateQueries('getCartData');
  };
  return (
    <div className="border border-gray-300 p-3 mb-2">
      <span className="mb-5 inline-block">{option.option.optionName}</span>
      <div className="flex justify-between">
        <span className="flex items-center border border-gray-200 w-[100px] rounded-lg">
          <CounterBtn disabled={option.quantity === 1} callback={quantityMinusHandler}>
            -
          </CounterBtn>
          <span className="flex-1 text-center border-x-2">{option.quantity}</span>
          <CounterBtn callback={quantityPlusHandler}>+</CounterBtn>
        </span>
        <span className="font-bold">{option.price.toLocaleString('ko-kr')}원</span>
      </div>
    </div>
  );
}

export default OptionCard;
