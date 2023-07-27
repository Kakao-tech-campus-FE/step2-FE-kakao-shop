import React from "react";
import CartProduct from "../../organisms/Cart/CartProduct";

export default function CartProducts({ products }) {
  return (
    <section>
      <ul>
        {products.map((product) => (
          <CartProduct
            key={`cart-product-key-${product.id}`}
            product={product}
          />
        ))}
      </ul>
    </section>
  );
}
