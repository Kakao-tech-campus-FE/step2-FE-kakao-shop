import { Suspense } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import Gnb from "../components/organisms/Gnb";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("carts", getCart);
  return (
    <>
      <Gnb />
      <Suspense fallback={<Loader />}>
        <OrderTemplate data={data} />
      </Suspense>
    </>
  );
};

export default OrderPage;
