import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../apis/cart";

const OrderPage = () => {
  const { data } = useQuery(["getCart"], getCart, { suspense: true });

  return <OrderTemplate data={data} />;
};

export default OrderPage;
