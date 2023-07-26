import { Suspense } from "react";
import { useQuery } from "react-query";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { getCart } from "../services/cart";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery(getCart);
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate />
    </Suspense>
  );
};

export default OrderPage;
