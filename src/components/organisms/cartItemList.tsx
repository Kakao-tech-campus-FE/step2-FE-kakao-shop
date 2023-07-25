import { CartData } from '../../types/product';
import { comma } from '../../utils/comma';
import CartItemCard from './cartItemCard';

interface CartItemListProps {
  cartData: CartData;
  handleOption: (cardId: number, quantity: number) => void;
}

export default function CartItemList({
  cartData,
  handleOption,
}: CartItemListProps) {
  return (
    <>
      <ul>
        {cartData.products.map((product) => (
          product.carts.filter((cart) => cart.quantity > 0).length > 0
            ? (
              <li
                key={`product-${product.id}`}
                className="my-6"
              >
                <CartItemCard
                  id={product.id}
                  productName={product.productName}
                  carts={product.carts}
                  handleOption={handleOption}
                />
              </li>
            ) : null
        ))}
      </ul>
      <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
        총
        {' '}
        <span className="text-xl text-kakao-red">
          {comma(cartData.totalPrice)}
          {' '}
          원
        </span>
      </div>
    </>
  );
}
