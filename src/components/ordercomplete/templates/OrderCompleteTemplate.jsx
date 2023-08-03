import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../common/atoms/Container";
import Button from "../../common/atoms/Button";
import CompleteUserInfo from "../atoms/CompleteUserInfo";
import CompleteProductInfo from "../organisms/CompleteProductInfo";
import { comma } from "../../../utils/convert";

export default function OrderCompleteTemplate({ data }) {
  const navigate = useNavigate();
  const [isOrderProductInfoOpen, setIsOrderProductInfoOpen] = useState(true);
  const totalProductCount = data.products.reduce((total, product) => {
    return (
      total +
      product.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    );
  }, 0);

  return (
    <section className="flex w-full min-w-[1280px] items-center justify-center border-0 border-b border-solid border-zinc-300 bg-zinc-100">
      <Container className="flex w-[870px] flex-col items-center gap-3 p-5">
        <div className="flex w-full flex-col items-center bg-white p-10">
          <h1 className="m-0 p-0 text-lg">구매완료!</h1>
          <h2 className="m-0 p-0 text-sm font-semibold">
            구매가 정상적으로 완료되었습니다.
          </h2>
          <Button
            className="m-3 cursor-pointer border-solid border-black bg-black p-2 px-4 font-bold text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            쇼핑 계속하기
          </Button>
        </div>
        {/* 배송지 정보 */}
        <CompleteUserInfo />
        {/* 주문 상품 정보 */}
        <CompleteProductInfo
          isOrderProductInfoOpen={isOrderProductInfoOpen}
          setIsOrderProductInfoOpen={setIsOrderProductInfoOpen}
          products={data.products}
          totalProductCount={totalProductCount}
        />
        {/* 결제 금액 */}
        <div className="w-full bg-white">
          <div className="flex items-center justify-between p-4 text-lg font-bold tracking-tight">
            <span>결제금액</span>
            <span className=" text-base text-blue-500">
              {comma(data.totalPrice)}원
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
