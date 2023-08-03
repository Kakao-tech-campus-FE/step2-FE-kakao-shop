import { Suspense } from "react";

import Loader from "components/atoms/Loader.js";
import OrderSection from "components/templates/OrderSection.js";

export default function Order() {
  return (
    <Suspense fallback={<Loader />}>
      <OrderSection />
    </Suspense>
  );
}
