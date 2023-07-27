import { getCart } from "../apis/cart";
import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import ErrorPage from "./Error/ErrorPage";
import { Suspense } from "react";

const OrderPage = () => {
  const { data, status } = useQuery(["cart"], getCart, {});

  if (status === "error") {
    return <ErrorPage message="상품을 불러오는 중 에러가 발생했습니다." />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
