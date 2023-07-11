import React from "react";
import ProductCard from "../molecules/ProductCard";

export default function ProductGrid({ allProducts }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 py-8">
      {allProducts.map((products) =>
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </ul>
  );
}
