import { useParams } from "react-router-dom";
import { getOrderFromId } from "../services/order";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderDetailTemplate from "../components/templates/OrderDetailTemplate";

const OrderDetailPage = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.user.token);
  const { data } = useQuery(`/orders/${id}`, () =>
    getOrderFromId(id, token)
  );

  return (
    <Suspense fallback={<Loader />}>
      <OrderDetailTemplate data={data} />
    </Suspense>
  );
};

export default OrderDetailPage;
