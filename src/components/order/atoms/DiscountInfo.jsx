import React from "react";

export default function DiscountInfo() {
  return (
    <div className=" flex w-full flex-col bg-white p-3">
      <h3 className="m-0 p-0 text-lg">할인혜택</h3>
      <div className="py-5 text-sm">
        <p className="flex justify-between">
          <span>즉시할인</span>
          <span className=" text-blue-500">0원</span>
        </p>
        <p className="flex justify-between">
          <span>쿠폰할인</span>
          <span className=" text-blue-500">0원</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between border-0 border-t border-solid border-zinc-200 pt-3 text-sm font-bold">
          <span>총 할인금액</span>
          <span className=" text-blue-500">0원</span>
        </p>
      </div>
    </div>
  );
}
