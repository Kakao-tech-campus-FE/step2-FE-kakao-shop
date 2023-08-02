import { useQuery } from "react-query";
import OrderTemplate from "../components/templates/OrderTemplate";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery(getCart);
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
