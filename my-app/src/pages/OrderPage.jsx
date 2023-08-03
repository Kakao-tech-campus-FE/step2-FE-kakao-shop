import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const token = useSelector((state) => state.user.token);
  const { data } = useQuery("carts", () => getCart(token));

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
