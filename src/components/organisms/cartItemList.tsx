import { CartData } from '../../types/product';
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
    <ul>
      {cartData.products.map((product) => (
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
      ))}
    </ul>
  );
}
