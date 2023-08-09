import React from "react";
import ProductCardSkeleton from "../../molecules/Main/ProductCardSkeleton";

export default function ProductsGridSkeleton() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 py-8">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((value) => (
        <ProductCardSkeleton key={value} />
      ))}
    </ul>
  );
}
