import { useQuery } from "react-query";
import GNB from "../components/organisms/GNB";
import OrderTemplate from "../components/templates/OrderTemplate";
import { getCart } from "../services/api/cart";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <div>
      <OrderTemplate />
    </div>
  );
};
export default OrderPage;
