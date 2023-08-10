import { Suspense } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../apis/order";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, error } = useQuery(`order/${id}`, () => getOrderFromId(id), {
    onError: (error) => {
      // 추가적으로 에러 발견시 추가 예정
      console.error("주문 처리 중 에러 발생:", error);
    },
  });

  if (error) {
    alert("결제에 실패했습니다.");
  }

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <OrderCompleteTemplate data={data} />
      </Suspense>
    </div>
  );
};

export default OrderCompletePage;
