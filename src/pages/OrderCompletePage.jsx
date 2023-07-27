import { Suspense } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../apis/order";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data } = useQuery(`order/${id}`, () => getOrderFromId(id));

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <OrderCompleteTemplate data={data} />
      </Suspense>
    </div>
  );
};

export default OrderCompletePage;
