import React from 'react';
import styled from 'styled-components';
import { comma } from '../../utils/convert';

const OrderContainer = styled.div`
  .label {
    font-weight: bold;
  }
  p {
    color: #a0a0a0;
  }
`;

const OrderItem = ({ orderList }) => {
  console.log('orderlist', orderList);
  return orderList.products.map((orders) => {
    return (
      <OrderContainer key={orders.id} className="flex flex-col gap-2 px-4 py-4">
        <div className="order">
          <div className="label"> 상품명 </div>
          <p>{orders.productName}</p>
          {orders.items.map((order, idx) => {
            return (
              <OrderContainer
                key={order.id}
                className="flex flex-col gap-2 mb-4"
              >
                <div className="label">옵션 {idx + 1}. </div>
                <p>{order.optionName}</p>
                <div className="label"> 구매수량 </div>
                <p>{order.quantity}</p>
                <div className="label"> 금액 </div>
                <p>{comma(order.price)}원</p>
              </OrderContainer>
            );
          })}
        </div>
        <div className="font-bold text-lg"> 총 금액 </div>
        <p className="text-xl">{comma(orderList.totalPrice)}원</p>
      </OrderContainer>
    );
  });
};

export default OrderItem;
