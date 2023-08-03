import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../services/order";
import { useQuery } from "react-query";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();

  const { data, error } = useQuery(`/orders/${id}`, () => getOrderFromId(id));

  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data} />
    </Suspense>
  );
};

export default OrderCompletePage;
