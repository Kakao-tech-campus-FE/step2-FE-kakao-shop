import CartItem from "components/atoms/CartItem";

export default function CartList({ products, refetch }) {
  return (
    <div>
      {products.map((product) => (
        <CartItem
          key={`product-${product.id}`}
          product={product}
          refetch={refetch}
        />
      ))}
    </div>
  );
}
