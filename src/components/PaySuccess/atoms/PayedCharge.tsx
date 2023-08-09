import React from 'react';

function PayedCharge({ amount }: { amount: number }) {
  return (
    <div className="border border-gray-200 flex justify-between items-center p-2">
      <span className="text-xl">일반 결제 금액</span>
      <span className="text-blue-500">{amount}원</span>
    </div>
  );
}

export default PayedCharge;
