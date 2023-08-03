import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrderById } from "../services/order";

const OrderCompletePage = () => {
  const { id } = useParams();

  const { data } = useQuery(`orders/${id}`, () => getOrderById(id));
  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data} />
=======

const OrderCompletePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate />
>>>>>>> 003f6137052531724667909b8aee43a2ed641ab1
    </Suspense>
  );
};

export default OrderCompletePage;
