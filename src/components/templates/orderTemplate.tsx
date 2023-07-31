import { useState } from 'react';
import { CartData } from '../../types/product';
import AgreeOrderTerms from '../molecules/agreeOrderTerms';
import OrderItemList from '../organisms/orderItemList';
import Button from '../atoms/button';
import { comma } from '../../utils/comma';

interface OrderTemplateProps {
  cartData: CartData;
  isOrderLoading: boolean;

  handleOrder: () => void;
}

export default function OrderTemplate({
  cartData,
  isOrderLoading,
  handleOrder,
}: OrderTemplateProps) {
  const [isAllAgreed, setIsAllAgreed] = useState(false);

  return (
    <div className="w-[40rem]">
      <section>
        <h1 className="py-2 text-center text-2xl font-bold">주문 상품 정보</h1>
        <OrderItemList
          products={cartData.products}
        />
        <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
          총 주문 금액
          {' '}
          <span className="text-xl text-kakao-red">
            {comma(cartData.totalPrice)}
            {' '}
            원
          </span>
        </div>
      </section>
      <AgreeOrderTerms
        isAllAgreed={isAllAgreed}
        setIsAllAgreed={setIsAllAgreed}
      />
      <Button
        type="button"
        className="w-full rounded-sm bg-kakao p-2 font-bold
      disabled:bg-stone-300"
        disabled={!isAllAgreed}
        onClick={handleOrder}
        isLoading={isOrderLoading}
      >
        결제하기
      </Button>
    </div>
  );
}
