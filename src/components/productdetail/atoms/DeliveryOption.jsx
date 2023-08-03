import React from "react";

export default function DeliveryOption() {
  return (
    <div className=" w-[330px] py-5 flex text-sm border-0 border-solid border-zinc-200 border-b-[1px] tracking-tight ">
      <div className=" font-bold ">
        <div className="pb-3">배송방법</div>
        <div>배송비</div>
      </div>
      <div className="grow pl-4">
        <div className="pb-3">택배배송</div>
        <input type="text" disabled placeholder="무료" className="w-full p-1" />
        <div className="pt-1 text-xs text-zinc-500">
          제주 추가 3,000원, 제주 외 도서지역 추가 3,000원
        </div>
      </div>
    </div>
  );
}
