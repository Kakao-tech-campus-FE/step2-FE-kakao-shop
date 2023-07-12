import React, { Suspense } from "react";
import ProductGrid from "../components/organisms/ProductGrid";
import ProductsGridSkeleton from "../components/organisms/ProductsGridSkeleton";

export default function MainPage() {
  return (
    <main className="relative mx-auto px-10 max-w-7xl">
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </main>
  );
}
