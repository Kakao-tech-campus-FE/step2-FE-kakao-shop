import { Suspense } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";

const OrderPage = () => {
  // const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate />
    </Suspense>
  );
};

export default OrderPage;
