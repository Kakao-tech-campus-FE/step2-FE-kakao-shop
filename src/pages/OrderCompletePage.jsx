import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrderFromId } from "../services/order";

function OrderCompletePage() {
  const { id } = useParams();
  const { data } = useQuery(`/orders/${id}`, () => getOrderFromId(id), {
    suspense: true,
  });

  return (
    <div className="orderCompletepage">
      <Suspense fallback={<Loader />}>
        <OrderCompleteTemplate data={data} />
      </Suspense>
    </div>
  );
}

export default OrderCompletePage;
