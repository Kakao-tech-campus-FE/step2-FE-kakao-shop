import { useQuery } from "react-query";
import { getCart } from "../services/api/cart";
import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";

const OrderTemplate = React.lazy(() =>
  import("../components/templates/OrderTemplate")
);

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};
export default OrderPage;
