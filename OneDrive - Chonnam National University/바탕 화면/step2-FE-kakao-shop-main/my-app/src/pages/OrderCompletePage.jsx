import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../services/order";
import { useQuery } from "react-query";
import OrderCompleteTemplate from "../components/templates2/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();

  //완료된 결제 정보를 불러오기
  const { data, error } = useQuery(`/orders/${id}`, () => getOrderFromId); // eslint-disable-line no-unused-vars 
  
  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data}/>
    </Suspense>
  );
};

export default OrderCompletePage;