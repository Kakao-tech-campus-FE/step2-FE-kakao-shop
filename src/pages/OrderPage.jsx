import { Suspense } from "react";
import OrderTemplate from "../components/templates2/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query"; // eslint-disable-line no-unused-vars
import { getCart } from "../services/cart"; // eslint-disable-line no-unused-vars
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