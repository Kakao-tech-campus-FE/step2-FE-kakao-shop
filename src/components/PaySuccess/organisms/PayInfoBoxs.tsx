import React from 'react';
import Title from '../atoms/Title';
import PayInfoBox from '../molecules/PayInfoBox';
import { PayResponse } from '../../../types/Pay';

function PayInfoBoxs({ products }: { products: PayResponse['response']['products'] }) {
  return (
    <div className="border border-gray-2 mb-4">
      <Title>주문 상품 정보</Title>
      {products?.map((product) => (
        <PayInfoBox product={product} />
      ))}
    </div>
  );
}

export default PayInfoBoxs;
