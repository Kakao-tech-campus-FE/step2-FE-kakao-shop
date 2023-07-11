import React from "react";
import ProductCard from "../molecules/ProductCard";

export default function ProductGrid({ allProducts }) {
  return (
    <ul>
      {allProducts.map((products) =>
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </ul>
  );
}
