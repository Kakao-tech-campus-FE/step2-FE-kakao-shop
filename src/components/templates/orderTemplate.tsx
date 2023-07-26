import { useState } from 'react';
import { CartData } from '../../types/product';
import AgreeOrderTerms from '../molecules/agreeOrderTerms';
import OrderItemList from '../organisms/orderItemList';
import Loader from '../atoms/loader';

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
      <h1 className="py-2 text-center text-2xl font-bold">주문 상품 정보</h1>
      <OrderItemList
        products={cartData.products}
        totalPrice={cartData.totalPrice}
      />
      <AgreeOrderTerms
        isAllAgreed={isAllAgreed}
        setIsAllAgreed={setIsAllAgreed}
      />
      {isOrderLoading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : (
        <button
          type="button"
          className="w-full rounded-sm bg-kakao p-2 font-bold
          disabled:bg-stone-300"
          disabled={!isAllAgreed}
          onClick={handleOrder}
        >
          결제하기
        </button>
      )}
    </div>
  );
}
