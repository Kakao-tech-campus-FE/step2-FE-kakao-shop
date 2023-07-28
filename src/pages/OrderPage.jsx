import { useQuery } from "react-query";
import { Suspense } from "react";
import { getCart } from "../api/cart";
import Loader from "../components/atoms/Loader";
import OrderTemplate from "../components/templates/OrderTemplate";

const OrderPage = () => {
  const { data } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
