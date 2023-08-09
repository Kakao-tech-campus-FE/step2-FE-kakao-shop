import { useQuery } from "react-query";
import { getOrderFromId } from "../services/api/order";
import { useParams } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";

const OrderCompleteTemplate = React.lazy(() =>
  import("../components/templates/OrderCompleteTemplate")
);

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery("order-check", () => {
    return getOrderFromId(id);
  });
  return !error ? (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data} />
    </Suspense>
  ) : (
    <span>에러가 발생했습니다.</span>
  );
};
export default OrderCompletePage;
