import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import ErrorPage from "./Error/ErrorPage";
import { Suspense } from "react";
import { getOrders } from "../apis/order";
import { useParams } from "react-router-dom";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, status } = useQuery(["order", id], () => getOrders(id));

  if (status === "error") {
    return <ErrorPage message="주문서를 불러오는 중 에러가 발생했습니다." />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data?.data?.response} />
    </Suspense>
  );
};

export default OrderCompletePage;
