import { Link } from 'react-router-dom';
import { OrderData } from '../../types/product';
import ConfirmOrderItemList from '../organisms/confirmOrderItemList';

interface ConfirmOrderTemplateProps {
  orderData: OrderData;
}

export default function ConfirmOrderTemplate({
  orderData,
}: ConfirmOrderTemplateProps) {
  return (
    <div className="w-[40rem]">
      <section className="my-4 text-center">
        <h1 className="my-4 text-2xl font-bold">구매 완료</h1>
        <p>구매가 정상적으로 완료되었습니다.</p>
      </section>
      <section>
        <ConfirmOrderItemList
          id={orderData.id}
          products={orderData.products}
          totalPrice={orderData.totalPrice}
        />
      </section>
      <Link to="/" className="block rounded-sm bg-kakao p-2 text-center">
        쇼핑 계속하기
      </Link>
    </div>
  );
}
