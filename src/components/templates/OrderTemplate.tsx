import React from 'react';
import SimpleButton from '../atoms/SimpleButton';
import { useGetCartQuery } from '../../apis/productApi';
import OrderItem from '../organisms/OrderItem';
import { comma } from '../../utils/convert';

const OrderTemplate = () => {
  const { data: cartProducts } = useGetCartQuery();

  return (
    <div>
      {cartProducts && (
        <>
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
          <section className='mb-3'>
            <div className='border-y bg-white p-4 text-sm font-bold'>
              <h2>주문상품 정보</h2>
            </div>
            <div className='space-y-4'>
              {cartProducts.products.map((product) => (
                <OrderItem key={product.id} product={product} />
              ))}
            </div>
          </section>
          <section>
            <div className='border-y bg-white p-4 text-sm font-bold'>
              <h2>결제 정보</h2>
            </div>
            <div className='flex items-center justify-between bg-white p-4'>
              <p className='text-lg'>최종 결제금액</p>
              <p className='font-semibold'>{comma(cartProducts.totalPrice)}원</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default OrderTemplate;
