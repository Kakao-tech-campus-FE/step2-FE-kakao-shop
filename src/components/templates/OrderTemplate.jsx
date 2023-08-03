import React, { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { comma } from '../../utils/convert';
import { order } from '../../services/order';
import useAgree from '../../hooks/useAgree';
// 사용자의 장바구니 목록을 조회해서 보여주는 것
const staticServerUrl = process.env.REACT_APP_PATH || '';
const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data.data.response;
  const {
    agreePayment,
    agreePolicy,
    allAgreeRef,
    agreePaymentRef,
    agreePolicyRef,
    handleAllAgree,
    handleAgreement,
  } = useAgree();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: 'order',
    mutationFn: order,
  });
  // 렌더링만 해준다.
  // 주문품목
  const OrderItems = () => {
    // item : 각 상품, carts: 옵션이 담김
    return products.flatMap((item) => {
      return item.carts.map((cart) => (
        <div key={cart.id} className="p-4 border-t-2">
          <div className="product-name font-bold">
            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
          </div>
          <div className="quantity">
            <span>{comma(cart.quantity)}개</span>
          </div>
          <div className="price font-bold">
            <span>{comma(cart.price * cart.quantity)}원</span>
          </div>
        </div>
      ));
    });
  };

  return (
    <div className="">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border p-2">
          <h1 className="text-sm font-bold">주문 하기</h1>
        </div>
        <div className="border p-4">
          <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
          <div className="flex items-center gap-4">
            <span className="text-black">홍길동</span>
            <span className="text-blue-400 bg-blue-100 text-xs p-1">
              기본배송지
            </span>
          </div>
        </div>
        <div className="border p-4">
          <span className="text-black"> 광주광역시 북구 용봉동 000-00</span>
        </div>
        <div className="border p-4">
          <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        <div className="border p-4">
          <OrderItems />
        </div>
        {/* 총 주문금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl text-indigo-700">
            {comma(totalPrice)}원
          </span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
            />
            <label htmlFor="all-agree" className="text-xl font-bold">
              전체 동의{' '}
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="agree"
              name="payment-agree"
              ref={agreePaymentRef}
              checked={agreePayment}
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-sm">
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="policy"
              name="policy-agree"
              ref={agreePolicyRef}
              checked={agreePolicy}
              onClick={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제 3자 제공동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            onClick={() => {
              if (!agreePayment || !agreePolicy) {
                alert('모든 항목의 동의가 필요!');
                return;
              }
              mutate(null, {
                onError: (error) => {
                  if (error.response.request.status === 401) {
                    alert('로그인 세션이 만료되었습니다 다시 로그인해 주세요');
                    navigate(staticServerUrl + '/login');
                  } else {
                    navigate(staticServerUrl + '/error');
                  }
                },
                onSuccess: (res) => {
                  const { id } = res.data.response;
                  alert('주문완료');
                  navigate(`/orders/complete/${id}`);
                },
              });
              // Post :/orders/save
              //  DB :장바구니 모든 항목 결재로 저장
              // 장바구니는 비워짐
              // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디 같이 전달)
              // /orders/complete/:id
            }}
            className={`w-full mt-2 p-4 font-medium rounded-md" ${
              agreePayment && agreePolicy
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-300 text-gray-500'
            }`}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTemplate;
