import { Suspense } from "react";

import Loader from "components/atoms/Loader.js";
import ProductSection from "components/templates/ProductSection.js";

export default function Product() {
  return (
    <Suspense fallback={<Loader />}>
      <ProductSection />
    </Suspense>
  );
}
