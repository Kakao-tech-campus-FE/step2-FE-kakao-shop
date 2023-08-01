import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { comma } from '../../utils/convert';
import Container from '../atoms/Container';
import OrderItem from '../atoms/OptionItem';

const CompleteTemplate = ({ data }) => {
  const orderList = data;
  const navigate = useNavigate();

  return (
    <section className="py-5 my-5 mx-auto max-w-[500px] w-full">
      <div className="text-center py-5">
        <h1 className="text-lg font-bold"> 구매 완료! </h1>
        <h2 className="text-lg"> 구매가 정상적으로 완료되었습니다.</h2>
      </div>
      <div className="border mb-4">
        <div className="border-b p-3 border-gray-200 text-center font-bold text-sm">
          주문상품 정보
        </div>
        <div className="product-list">
          <OrderItem orderList={orderList} />
        </div>
      </div>
      <div className="border">
        <div className="flex justify-between p-4">
          <span className="font-bold text-xl">일반 결제 금액</span>
          <span className="font-bold text-xl text-indigo-400">
            {comma(orderList.totalPrice)}원
          </span>
        </div>

        <button
          className="w-full py-4 text-black font-bold text-xl bg-yellow-400"
          onClick={() => {
            navigate('/');
            // 주문 완료 후 메인페이지로 이동
          }}
        >
          쇼핑 계속하기
        </button>
      </div>
    </section>
  );
};

export default CompleteTemplate;
// <Container className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     <div className="buy">
//       <div>구매완료!</div>
//       <div>구매가 정상적으로 완료되었습니다.</div>
//     </div>
//     <div className="order-info">
//       <div>주문 상품 정보</div>
//       <div className="orders-map">
//         <OrderItems />
//       </div>
//     </div>
//     <div className="buy-price">
//       <span>일반 결제금액</span>
//       <span>{comma(orderList.totalPrice)}원</span>
//     </div>
//   </div>
// </Container>

// const OrderItems = () => {
//   return orderList.products.map((orders) => (
//     <ol>
//       <div>{`상품명 : ${orders.productName}`}</div>
//       {orders.items.map((order) => (
//         <>
//           <div>{`주문번호 : ${order.id}`}</div>
//           <div>{`옵션 : ${order.optionName}`}</div>
//         </>
//       ))}
//     </ol>
//   ));
// };
