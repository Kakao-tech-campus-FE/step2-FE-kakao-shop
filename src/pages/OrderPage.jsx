import { useQuery } from "react-query";
import OrderTemplate from "../components/templates/OrderTemplate";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { inCart } from "../services/cart";
const OrderPage = () => {
  const { data } = useQuery("cart", inCart, {
    suspense: true,
  });

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
