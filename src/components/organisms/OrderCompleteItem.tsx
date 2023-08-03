import React from 'react';
import { FiBox } from 'react-icons/fi';
import { CompleteProduct } from '../../dto/productDto';

interface OrderCompleteItemProps {
  product: CompleteProduct;
}

const OrderCompleteItem = ({ product }: OrderCompleteItemProps) => {
  return (
    <div className='border-t bg-white p-4'>
      <div className='mb-2 flex items-center gap-1'>
        <FiBox />
        <span>{product.productName}</span>
      </div>
      <div className='flex gap-2 px-2 text-xs text-gray-500'>
        <span>옵션</span>
        <span>
          {product.items.map((item) => (
            <p key={item.id}>{`${item.optionName} / ${item.quantity}개`}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default OrderCompleteItem;
