import CartList from "../components/molecules/CartList";
import { Suspense, useEffect } from "react";
import { getCart } from "../apis/cart";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import { defaultToast } from "../utils/swal";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";

/**
 * 장바구니 페이지
 */
const CartPage = () => {
  const { data, status, error } = useQuery(["cart"], getCart, {
    retry: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "error") {
      if (error?.response?.status === 401) {
        // 로그인 안 한 사용자가 장바구니 조회 시
        defaultToast("로그인이 필요한 기능입니다");
        navigate("/login");
      }
      return (
        <ErrorPage message="장바구니를 불러오는 중 에러가 발생했습니다." />
      );
    }
  }, [status, error, navigate]);

  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
