import { Suspense } from "react";

import Loader from "components/atoms/Loader.js";
import ProductsSection from "components/templates/ProductsSection.js";

export default function Products() {
  return (
    <Suspense fallback={<Loader />}>
      <ProductsSection />
    </Suspense>
  );
}
