import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {

  return (
    <Suspense fallback={<Loader/>}>
      <OrderCompleteTemplate />
    </Suspense>
  );
};

export default OrderCompletePage;