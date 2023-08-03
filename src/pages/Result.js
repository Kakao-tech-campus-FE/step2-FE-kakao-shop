import { Suspense } from "react";

import Loader from "components/atoms/Loader.js";
import ResultSection from "components/templates/ResultSection.js";

export default function Result() {
  return (
    <Suspense fallback={<Loader />}>
      <ResultSection />
    </Suspense>
  );
}
