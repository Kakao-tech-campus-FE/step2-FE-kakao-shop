import React from "react";
import { comma } from "../../../utils/convert";

export default function PaymentInfo({ totalPrice, totalProductCount }) {
  return (
    <div className=" flex w-full flex-col bg-white p-4">
      <h3 className="m-0 p-0 pb-3 text-lg">결제정보</h3>
      <div className="flex flex-col gap-2 border-0 border-y border-solid border-zinc-200 py-5 text-sm">
        <p className="flex justify-between">
          <span>상품금액 ({totalProductCount}개)</span>
          <span>{comma(totalPrice)}원</span>
        </p>
        <p className="flex justify-between">
          <span>배송비</span>
          <span>0원</span>
        </p>
        <p className="flex justify-between">
          <span>할인금액</span>
          <span>0원</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between pt-3 text-lg font-[500]">
          <span>최종 결제금액</span>
          <span className="font-bold">{comma(totalPrice)}원</span>
        </p>
      </div>
    </div>
  );
}
