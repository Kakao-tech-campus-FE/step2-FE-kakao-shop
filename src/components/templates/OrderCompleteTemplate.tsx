import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DarkButton from '../atoms/DarkButton';
import { comma, staticUrl } from '../../utils/convert';
import { useGetOrderQuery } from '../../apis/productApi';
import OrderCompleteItem from '../organisms/OrderCompleteItem';

const OrderCompleteTemplate = () => {
  const { id: orderId } = useParams();

  const { data: order } = useGetOrderQuery(Number(orderId));
  const navigate = useNavigate();

  return (
    <div>
      {order && (
        <div className='flex h-screen flex-col items-center justify-center'>
          <div className='mb-10 flex flex-col items-center'>
            <h1 className='text-lg font-medium'>구매완료!</h1>
            <p>구매가 정상적으로 완료되었습니다.</p>
            <div className='mt-4 w-fit'>
              <DarkButton
                onClick={() => {
                  navigate(staticUrl('/'));
                }}
              >
                쇼핑 계속하기
              </DarkButton>
            </div>
          </div>
          <section className='mb-3 w-full max-w-3xl border-y'>
            <h2 className='bg-white p-4 text-sm font-semibold'>주문상품 정보</h2>
            <div>
              {order.products.map((product) => (
                <OrderCompleteItem key={product.productName} product={product} />
              ))}
            </div>
          </section>
          <section className='w-full max-w-3xl border-y bg-white'>
            <h2 className='border-b p-4 text-sm font-semibold'>결제정보</h2>
            <div className='flex items-center justify-between bg-white p-4'>
              <p className='text-lg'>최종 결제금액</p>
              <p className='font-semibold text-red-500'>{comma(order.totalPrice)}원</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default OrderCompleteTemplate;
