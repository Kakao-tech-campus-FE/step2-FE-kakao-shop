import { useParams } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../atoms/Loader";
import { getOrderFromId } from "../../services/order";
import { useQuery } from "react-query";
import OrderCompleteTemplate from "../templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();

  const { data, error } = useQuery(`/orders/${id}`, () => getOrderFromId(id));

  return (
    <Suspense fallback={<Loader />}>
      {data && <OrderCompleteTemplate data={data} />}
      {error && <div>{error}</div>}
    </Suspense>
  );
};

export default OrderCompletePage;
