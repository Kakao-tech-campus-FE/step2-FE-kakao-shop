import { getCart } from "../apis/cart";
import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import ErrorPage from "./Error/ErrorPage";
import { Suspense, useEffect } from "react";
import { defaultToast } from "../utils/swal";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { data, status, error } = useQuery(["cart"], getCart, {});
  const navigate = useNavigate();

  // 주문 페이지에서 로그인이 만료된 후 새로고침 하는 경우 혹은 직접 주문페이지로 넘어오는 경우 처리
  useEffect(() => {
    if (status === "error") {
      if (error?.response?.status === 401) {
        // 로그인 안 한 사용자가 결제 쿼리 요청 시
        defaultToast("로그인이 만료되었습니다. 다시 로그인 해주세요.");
        navigate("/login");
      }
      return (
        <ErrorPage message="장바구니를 불러오는 중 에러가 발생했습니다." />
      );
    }
  }, [status, error, navigate]);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
