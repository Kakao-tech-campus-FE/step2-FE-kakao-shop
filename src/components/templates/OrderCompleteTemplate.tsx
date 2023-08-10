import React from 'react';
import { OrderResult, OrderedProductData } from '@api/dto';
import OptionItem from '@components/atoms/OptionItem';
import FilledButton from '@components/atoms/button/FilledButton';
import Card from '@components/atoms/Card';
import { useNavigate } from 'react-router-dom';

interface OrderCompleteTemplateProps {
  data: OrderResult;
}

const ProductItems = (products: OrderedProductData[]) => {
  return products.map((product: OrderedProductData) => {
    return (
      <div key={product.productName} className="mb-7">
        <span className="font-bold mr-3">상품명</span>
        <span>{product.productName}</span>
        <OptionItem items={product.items} />
      </div>
    );
  });
};

const OrderCompleteTemplate = ({ data }: OrderCompleteTemplateProps) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="space-y-5">
        <h1 className="text-title text-bold text-center font-gasoek text-pointPupple drop-shadow-Title">구매 완료</h1>
        <Card>
          <div className="text-xl font-bold mb-5">주문상품 정보</div>
          <div>{ProductItems(data.response.products)}</div>
          <div className="flex justify-end gap-3 font-bold text-xl mt-10 mx-3">
            <p>총금액</p>
            <p className="text-subOrange">{data.response.totalPrice} 원</p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-end gap-3 font-bold text-xl">
            <div>일반 결제 금액</div>
            <p className="text-subOrange">{data.response.totalPrice}원</p>
          </div>
        </Card>
      </section>
      <div className="flex justify-center mt-10">
        <FilledButton
          onClick={() => {
            navigate('/');
          }}
        >
          쇼핑 계속하기
        </FilledButton>
      </div>
    </>
  );
};

export default OrderCompleteTemplate;
