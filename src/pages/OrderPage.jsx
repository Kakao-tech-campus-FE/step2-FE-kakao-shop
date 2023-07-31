import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "react-query";
import { getCart } from "../services/getCart";
import { Suspense } from "react";
import Loading from ".././components/atoms/Loader";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("carts", getCart);

  return (
    <Suspense fallback={<Loading />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
