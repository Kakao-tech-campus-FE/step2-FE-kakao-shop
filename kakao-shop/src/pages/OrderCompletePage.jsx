import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import ErrorPage from "./Error/ErrorPage";
import { Suspense } from "react";
import { getOrders } from "../apis/order";
import { useParams } from "react-router-dom";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { simpleAlert } from "../utils/swal";
import { useNavigate } from "react-router-dom";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, status, error } = useQuery(["order", id], () => getOrders(id));
  const navigate = useNavigate();

  if (status === "error") {
    if (error?.response?.status === 401) {
      // 주문이 완료되는 동안 로그인이 만료된 경우
      // 결제가 제대로 이루어지지 않았을 수 있으니 주문서를 다시 확인하도록 한다
      simpleAlert(
        "로그인이 만료되었습니다. 재로그인 후 마이페이지에서 결제 정보를 다시 확인해주세요."
      );
      navigate("/login");
    }
    return <ErrorPage message="주문서를 불러오는 중 에러가 발생했습니다." />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data?.data?.response} />
    </Suspense>
  );
};

export default OrderCompletePage;
