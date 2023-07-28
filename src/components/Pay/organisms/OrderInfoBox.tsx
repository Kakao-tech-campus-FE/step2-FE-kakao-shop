import React from 'react';
import { GetCartResponse } from '../../../types/Product';
import OrderInfos from '../molecules/OrderInfos';

type OrderInfoBoxProps = Pick<GetCartResponse['response'], 'products'>;
function OrderInfoBox({ products }: OrderInfoBoxProps | { products: undefined }) {
  return (
    <div className="border-x border-t border-gray-200 mb-5">
      <div className="font-semibold text-lg border-b border-gray-200 p-2">주문상품 정보</div>
      {products
        ? products.map((product) => <OrderInfos key={product.id} options={product.carts} productName={product.productName}></OrderInfos>)
        : '주문할 상품이 존재하지 않습니다.'}
    </div>
  );
}

export default OrderInfoBox;
