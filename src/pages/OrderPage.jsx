import { Suspense } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../services/cart";

const OrderPage = () => {
  return (
     <div className="my-8 max-w-screen-xl">
      <Suspense fallback={<Loader />}>
        <OrderTemplate />
      </Suspense>
    </div>
  );
};

export default OrderPage;
