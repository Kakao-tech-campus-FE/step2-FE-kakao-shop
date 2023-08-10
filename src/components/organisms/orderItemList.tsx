import { CartItem } from '../../types/product';
import OrderItemCard from './orderItemCard';

interface OrderItemListProps {
  products: CartItem[];
}

export default function OrderItemList({
  products,
}: OrderItemListProps) {
  return (
    <ul>
      {products.map((product) => (
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
      ))}
    </ul>
  );
}
