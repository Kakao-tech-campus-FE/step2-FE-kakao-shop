import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrderById } from "../services/order";

const OrderCompletePage = () => {
  const { id } = useParams();

  const { data } = useQuery(`orders/${id}`, () => getOrderById(id));
  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data} />
    </Suspense>
  );
};

export default OrderCompletePage;
