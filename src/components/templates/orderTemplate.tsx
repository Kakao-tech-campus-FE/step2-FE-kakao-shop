import { useState } from 'react';
import { CartData } from '../../types/product';
import AgreeOrderTerms from '../molecules/agreeOrderTerms';
import OrderItemList from '../organisms/orderItemList';

interface OrderTemplateProps {
  cartData: CartData;
}

export default function OrderTemplate({
  cartData,
}: OrderTemplateProps) {
  const [isAllAgreed, setIsAllAgreed] = useState(false);

  return (
    <div className="w-[40rem]">
      <h1 className="py-2 text-center text-2xl font-bold">주문 상품 정보</h1>
      <OrderItemList
        products={cartData.products}
        totalPrice={cartData.totalPrice}
      />
      <AgreeOrderTerms
        isAllAgreed={isAllAgreed}
        setIsAllAgreed={setIsAllAgreed}
      />
      <button
        type="button"
        className="w-full rounded-sm bg-kakao p-2 font-bold
          disabled:bg-stone-300"
        disabled={!isAllAgreed}
      >
        결제하기
      </button>
    </div>
  );
}
