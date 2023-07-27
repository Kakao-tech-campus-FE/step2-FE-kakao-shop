import React from 'react';
import DarkButton from '../components/atoms/DarkButton';
import { comma } from '../utils/convert';

const OrderCompletePage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='mb-10 flex flex-col items-center'>
        <h1 className='text-lg font-medium'>구매완료!</h1>
        <p>구매가 정상적으로 완료되었습니다.</p>
        <div className='mt-4 w-fit'>
          <DarkButton
            onClick={() => {
              // TODO
            }}
          >
            쇼핑 계속하기
          </DarkButton>
        </div>
      </div>
      <section className='mb-3 w-full max-w-3xl border bg-white'>
        <h2 className='border-b p-4 text-sm font-semibold'>주문상품 정보</h2>
        <div className='grid grid-cols-5 p-4'>
          <span className='col-span-1'>상품명</span>
          <span className='col-span-4'>test</span>
          <span className='col-span-1'>주문번호</span>
          <span className='col-span-4'>test</span>
          <span className='col-span-1'>옵션</span>
          <span className='col-span-4'>test</span>
        </div>
      </section>
      <section className='w-full max-w-3xl border bg-white'>
        <h2 className='border-b p-4 text-sm font-semibold'>결제정보</h2>
        <div className='flex items-center justify-between bg-white p-4'>
          <p className='text-lg'>최종 결제금액</p>
          <p className='font-semibold text-red-500'>{comma(100000)}원</p>
        </div>
      </section>
    </div>
  );
};

export default OrderCompletePage;
