import { useQuery } from "react-query";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplates";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { getOrderFromId } from "../services/order";
import { useParams } from "react-router-dom";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data } = useQuery(
    `orders/${id}`,
    () => {
      return getOrderFromId(id);
    },
    { suspense: true }
  );
  return (
    <Suspense fallback={<Loader />}>
      {<OrderCompleteTemplate data={data} />}
    </Suspense>
  );
};

export default OrderCompletePage;
