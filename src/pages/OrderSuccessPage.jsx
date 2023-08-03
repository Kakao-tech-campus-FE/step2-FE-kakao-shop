import OrderSuccessTemplate from "../components/templates/OrderSuccessTemplate";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";

const OrderSuccessPage = () => {
  return (
    <div className="my-8 max-w-screen-xl">
      <Suspense fallback={<Loader />}>
        <OrderSuccessTemplate />
      </Suspense>
    </div>
  );
};

export default OrderSuccessPage;
