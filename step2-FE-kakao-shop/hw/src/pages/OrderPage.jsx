import { useQuery } from "react-query";
import Container from "../components/atoms/Container";
import OrderTemplate from "../components/oTemplates/OrderTemplate";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { getCart } from "../services/cart";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
