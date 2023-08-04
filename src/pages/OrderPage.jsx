import { Suspense } from "react";
import OrderTemplate from "../components/templates2/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query"; // eslint-disable-line no-unused-vars
import { getCart } from "../services/cart"; // eslint-disable-line no-unused-vars

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart); // eslint-disable-line no-unused-vars
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;