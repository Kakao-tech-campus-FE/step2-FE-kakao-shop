import React from 'react';

function TotalPay({ amount }: { amount: number }) {
  return (
    <div className="border border-gray-200 flex justify-between items-center p-2 mb-5">
      <span className="text-xl">총 주문 금액</span>
      <span className="text-blue-500">{amount}원</span>
    </div>
  );
}

export default TotalPay;
