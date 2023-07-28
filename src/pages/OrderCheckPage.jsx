import { useQuery } from "react-query";
import OrderCheckTemplate from "../components/templates/OrderCheckTemplate";
import { getOrderFromId } from "../services/api/order";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";

const OrderCheckPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery("order-check", () => {
    return getOrderFromId(id);
  });
  return (
    <Suspense fallback={<Loader />}>
      <OrderCheckTemplate data={data} />
    </Suspense>
  );
};
export default OrderCheckPage;
