import React from 'react';
import { HiChevronUp } from 'react-icons/hi2';
import ProductOption from '../atoms/ProductOption';
import { OptionInfo } from '../../dto/productDto';

interface ProductOptionListProps {
  options: OptionInfo[];
  onOptionClick: (option: OptionInfo) => void;
}

const ProductOptionList = ({ options, onOptionClick }: ProductOptionListProps) => {
  return (
    <div className='rounded-sm border border-gray-800'>
      <button
        type='button'
        className='flex w-full cursor-pointer items-center justify-between border border-b-gray-200 bg-slate-50 p-3'
      >
        <p>옵션</p>
        <HiChevronUp />
      </button>
      <ol className='divide-y divide-gray-200'>
        {options.map((option) => (
          <li key={option.id}>
            <button type='button' className='w-full px-3 py-4 text-left' onClick={() => onOptionClick(option)}>
              <ProductOption optionInfo={option} />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductOptionList;
