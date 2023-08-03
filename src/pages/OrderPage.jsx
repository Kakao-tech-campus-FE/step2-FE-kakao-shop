import { Suspense } from "react";
import { useQuery } from "react-query";
import { getCart } from "../apis/cart";
import Loader from "../components/atoms/Loader";
import OrderTemplate from "../components/templates/OrderTemplate";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
