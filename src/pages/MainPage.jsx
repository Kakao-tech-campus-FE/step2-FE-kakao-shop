import React, { Suspense } from "react";
import ProductGrid from "../components/organisms/Main/ProductGrid";
import ProductsGridSkeleton from "../components/organisms/Main/ProductsGridSkeleton";
import Carousel from "../components/organisms/Main/Carousel/Carousel";

export default function MainPage() {
  return (
    <main className="relative">
      <Carousel />
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </main>
  );
}
