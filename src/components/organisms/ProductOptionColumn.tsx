import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import ProductOptionList from '../molecules/ProductOptionList';
import Button from '../atoms/Button';
import DarkButton from '../atoms/DarkButton';

const ProductOptionColumn = () => {
  const options = []; // TODO
  return (
    <div>
      <p className='pb-2 font-bold'>옵션선택</p>
      <ProductOptionList options={[]} />
      <div className='mt-7'>
        <div className='space-y-1 pb-4'>
          <span className='flex items-center'>
            <strong className='w-16'>배송방법</strong>
            <p>택배배송</p>
          </span>
          <span className='flex items-center'>
            <strong className='w-16'>배송비</strong>
            <p>무료</p>
          </span>
        </div>
        <hr />
        <div className='flex justify-between py-5 text-lg'>
          <dl className='flex'>
            <dt className='pr-1'>총 수량</dt>
            <dd>{options.length}개</dd>
          </dl>
          <dl className='flex'>
            <dt className='pr-1'>총 주문 금액</dt>
            <dd>
              <strong className='text-red-500'>0{/* TODO */}</strong>원
            </dd>
          </dl>
        </div>
        <div className='flex'>
          <div className='mr-2 w-14'>
            <DarkButton
              onClick={() => {
                // TODO
              }}
            >
              <HiOutlineShoppingCart size={30} />
            </DarkButton>
          </div>
          <Button
            onClick={() => {
              // TODO
            }}
          >
            구매하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionColumn;
