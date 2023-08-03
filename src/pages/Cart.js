import { Suspense } from "react";

import Loader from "components/atoms/Loader.js";
import CartSection from "components/templates/CartSection.js";

export default function Cart() {
  return (
    <Suspense fallback={<Loader />}>
      <CartSection />
    </Suspense>
  );
}
