import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderTemplate from "../components/templates/OrderTemplate";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart, {
    suspense: true,
  });

  return (
    <div className="orderpage">
      <Suspense fallback={<Loader />}>
        <OrderTemplate data={data} />
      </Suspense>
    </div>
  );
};
export default OrderPage;
