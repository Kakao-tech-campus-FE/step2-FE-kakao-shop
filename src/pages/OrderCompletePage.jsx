import { useQuery } from "@tanstack/react-query";
import { ordersComplete } from "../services/order";
import { useParams } from "react-router-dom";
import Gnb from "../components/organisms/Gnb";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { Suspense } from "react";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["ordersComplete"], () =>
    ordersComplete(id)
  );

  return (
    <>
      <Gnb />
      <Suspense fallback={<Loader />}>
        <OrderCompleteTemplate data={data} />
      </Suspense>
    </>
  );
};

export default OrderCompletePage;
