import OrderSuccessTemplate from "../components/templates/OrderSuccessTemplate.jsx";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";

const OrderSuccessPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OrderSuccessTemplate />
    </Suspense>
  );
};

export default OrderSuccessPage;