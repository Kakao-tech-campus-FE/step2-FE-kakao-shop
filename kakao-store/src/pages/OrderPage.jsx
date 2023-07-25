import OrderTemplate from "../components/template/OrderTemplate.jsx";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader.jsx";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
