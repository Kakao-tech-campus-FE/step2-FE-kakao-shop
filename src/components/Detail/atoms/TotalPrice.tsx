import React from 'react';

function TotalPrice({ price }: { price: number }) {
  return <span>총 가격: {price.toLocaleString('ko-kr')}원</span>;
}

export default TotalPrice;
