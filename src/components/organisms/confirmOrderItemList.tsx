import { OrderData } from '../../types/product';
import { comma } from '../../utils/comma';
import ConfirmOrderItemCard from './confirmOrderItemCard';

export default function ConfirmOrderItemList({
  id,
  products,
  totalPrice,
}: OrderData) {
  return (
    <>
      <h2 className="my-2 font-bold">
        주문 정보
      </h2>
      <p>
        주문 번호:
        {' '}
        {id}
      </p>
      <ul>
        {products.map((product) => (
          <li
            key={`product-${product.productName}`}
            className="my-6"
          >
            <ConfirmOrderItemCard
              productName={product.productName}
              items={product.items}
            />
          </li>
        ))}
      </ul>
      <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
        총 결제 금액
        {' '}
        <span className="text-xl text-kakao-red">
          {comma(totalPrice)}
          {' '}
          원
        </span>
      </div>
    </>
  );
}
