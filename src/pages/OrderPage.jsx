import { Suspense } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../services/cart";

const OrderPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate />
    </Suspense>
  );
};

export default OrderPage;
