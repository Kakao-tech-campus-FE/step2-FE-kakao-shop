import React from 'react';
import SimpleButton from '../atoms/SimpleButton';

const OrderTemplate = () => {
  return (
    <div>
      <div className='border-y bg-white p-4'>
        <h1 className='text-center text-sm font-bold'>주문하기</h1>
      </div>
      <section className='mb-3 bg-white'>
        <h2 className='p-4 text-sm font-bold'>배송지 정보</h2>
        <div className='px-4 pb-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span>홍길동</span>
              <span className='rounded-md bg-blue-100 p-1 text-xs text-blue-400'>기본배송지</span>
            </div>
            <div>
              <SimpleButton
                onClick={() => {
                  // TODO
                }}
              >
                수정
              </SimpleButton>
            </div>
          </div>
          <p>010-0000-0000</p>
          <p className='text-sm'>서울특별시 강남구 도곡동 000-00</p>
        </div>
      </section>
    </div>
  );
};

export default OrderTemplate;
