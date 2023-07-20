import React, { Suspense } from "react";
import ProductDetail from "../components/templates/ProductDetail";
import Loader from "../components/molecules/Loader";

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<Loader height="h-full" />}>
      <ProductDetail />
    </Suspense>
  );
}
