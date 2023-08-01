import { OrderResult, OrderedOptionData, OrderedProductData } from '@api/dto';
import OptionItem from '@components/atoms/OptionItem';
import React from 'react';

interface OrderCompleteTemplateProps {
  data: OrderResult;
}

const ProductItems = (products: OrderedProductData[]) => {
  return products.map((product: OrderedProductData) => {
    return (
      <div key={product.productName}>
        <div>상품명</div>
        <p>{product.productName}</p>
        <OptionItem items={product.items} />
      </div>
    );
  });
};

const OrderCompleteTemplate = ({ data }: OrderCompleteTemplateProps) => {
  //  console.dir(data.response.products);
  return (
    <section>
      <div>
        <h1>구매 완료</h1>
      </div>
      <div>
        <div>주문상품 정보</div>
        <div>{ProductItems(data.response.products)}</div>
        <div>총금액</div>
        <p>{data.response.totalPrice}</p>
      </div>
    </section>
  );
};

export default OrderCompleteTemplate;
