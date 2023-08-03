import React from 'react';
import { PayedProduct } from '../../../types/Pay';
import PayInfo from '../atoms/PayInfo';

function PayInfoBox({ product }: { product: PayedProduct }) {
  return (
    <>
      {product.items.map((option) => (
        <div className="border-b border-gray-2">
          <PayInfo title="상품명" content={product.productName} />
          <PayInfo title="주문번호" content={option.id.toString()} />
          <PayInfo title="옵션" content={option.optionName} />
        </div>
      ))}
    </>
  );
}

export default PayInfoBox;
