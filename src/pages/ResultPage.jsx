import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import orderInstance from "../apis/order";
import Box from "../components/atoms/Box";
import Container from "../components/atoms/Container";
import { comma } from "../utils/convert";
import Button from "../components/atoms/Button";
import ResultProductsInfo from "../components/organisms/Result/ResultProductsInfo";
import ResultDelInfo from "../components/organisms/Result/ResultDelInfo";

const staticServerUri = process.env.REACT_APP_PATH || "";
export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { address, request, orderId } = location.state ?? {};
  const { error, data: result } = useQuery(
    ["order/result", orderId],
    () => orderInstance.confirmOrder(orderId),
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!orderId,
    }
  );

  useEffect(() => {
    if (!orderId) {
      navigate("/");
      return;
    }
  }, [orderId, navigate]);

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <main className="flex flex-col justify-center items-center gap-2 w-full min-h-full py-8">
      <h2 className="text-xl font-bold">구매완료!</h2>
      <p className="text-sm">구매가 정상적으로 완료되었습니다.</p>
      <section className="flex flex-col gap-4 mt-8 w-cart">
        <ResultProductsInfo productInfo={result?.data.response} />
        <ResultDelInfo address={address} request={request} />
        <Container className="flex flex-col">
          <Box className="flex justify-between px-8 py-4 font-semibold border">
            <span>일반 결제 금액</span>
            <span className="text-blue-600 font-bold">
              {comma(result?.data.response.totalPrice)}원
            </span>
          </Box>
          <Button
            padding="py-4"
            font="bold"
            color="yellow"
            onClick={() => navigate("/")}
          >
            쇼핑 계속하기
          </Button>
        </Container>
      </section>
    </main>
  );
}
