import CartItem from "components/atoms/CartItem.js";

export default function CartList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <CartItem key={`product-${product.id}`} product={product} />
      ))}
    </div>
  );
}
