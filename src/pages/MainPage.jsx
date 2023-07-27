import React, { Suspense } from "react";
import ProductGrid from "../components/organisms/Main/ProductGrid";
import ProductsGridSkeleton from "../components/organisms/Main/ProductsGridSkeleton";

export default function MainPage() {
  return (
    <main className="relative mx-auto px-10 max-w-7xl">
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </main>
  );
}
