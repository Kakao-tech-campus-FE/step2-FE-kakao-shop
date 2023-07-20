import React from "react";
import CartProduct from "../organisms/CartProduct";

export default function CartProducts({ products }) {
  return (
    <section>
      <h3 className="text-center py-3 font-semibold bg-white border-t">
        장바구니
      </h3>
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
