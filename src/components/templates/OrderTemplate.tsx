import React, { ComponentProps, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleButton from '../atoms/SimpleButton';
import { useGetCartQuery, useOrderSaveMutation } from '../../apis/productApi';
import OrderItem from '../organisms/OrderItem';
import { comma, staticUrl } from '../../utils/convert';

const OrderTemplate = () => {
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const navigate = useNavigate();

  const { data: cartProducts } = useGetCartQuery();
  const { mutate: saveOrder } = useOrderSaveMutation();

  const handleAgreementChange: ComponentProps<'input'>['onChange'] = (e) => {
    const { name, checked } = e.target;
    if (name === 'payment-agree') {
      setAgreePayment(checked);
    } else if (name === 'policy-agree') {
      setAgreePolicy(checked);
    } else if (name === 'all-agree') {
      setAgreePayment(checked);
      setAgreePolicy(checked);
    }
  };

  const handleOrderClick = () => {
    saveOrder(undefined, {
      onError: () => {
        alert('주문 실패');
      },
      onSuccess: (res) => {
        const { id } = res;
        alert('주문 완료');
        navigate(staticUrl(`/orders/complete/${id}`));
      },
    });
  };

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
          <section className='mb-3'>
            <div className='border-y bg-white p-4 text-sm font-bold'>
              <h2>결제 정보</h2>
            </div>
            <div className='flex items-center justify-between bg-white p-4'>
              <p className='text-lg'>최종 결제금액</p>
              <p className='font-semibold'>{comma(cartProducts.totalPrice)}원</p>
            </div>
          </section>
          <section className='mb-3 bg-white'>
            <div className='flex items-center gap-2 border-y bg-white p-4 text-sm font-bold'>
              <input
                className='h-5 w-5 rounded-sm border-gray-300 text-yellow-300 focus:ring-0'
                name='all-agree'
                type='checkbox'
                id='all-agree'
                checked={agreePayment && agreePolicy}
                onChange={handleAgreementChange}
              />
              <label htmlFor='all-agree'>전체 동의하기</label>
            </div>
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex items-center gap-2'>
                <input
                  className='h-5 w-5 rounded-sm border-gray-300 text-yellow-300 focus:ring-0'
                  name='payment-agree'
                  type='checkbox'
                  id='agree'
                  checked={agreePayment}
                  onChange={handleAgreementChange}
                />
                <label htmlFor='agree' className='text-sm'>
                  구매조건 확인 및 결제 진행 동의
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  className='h-5 w-5 rounded-sm border-gray-300 text-yellow-300 focus:ring-0'
                  name='policy-agree'
                  type='checkbox'
                  id='policy'
                  checked={agreePolicy}
                  onChange={handleAgreementChange}
                />
                <label htmlFor='policy' className='text-sm'>
                  개인정보 제3자 제공동의
                </label>
              </div>
            </div>
          </section>
          <button
            type='button'
            data-testid='order-button'
            disabled={!agreePayment || !agreePolicy}
            onClick={handleOrderClick}
            className='w-full bg-yellow-300 p-4 font-medium disabled:opacity-60'
          >
            결제하기
          </button>
        </>
      )}
    </div>
  );
};

export default OrderTemplate;
