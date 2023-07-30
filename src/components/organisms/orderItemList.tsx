import { CartData } from '../../types/product';
import { comma } from '../../utils/comma';
import OrderItemCard from './orderItemCard';

export default function OrderItemList({
  products,
  totalPrice,
}: CartData) {
  return (
    <>
      <ul>
        {products.map((product) => (
          product.carts.filter((cart) => cart.quantity > 0).length > 0
            ? (
              <li
                key={`product-${product.id}`}
                className="my-6"
              >
                <OrderItemCard
                  id={product.id}
                  productName={product.productName}
                  carts={product.carts}
                />
              </li>
            ) : null
        ))}
      </ul>
      <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
        총 주문 금액
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
