import React from "react";
import Text from "../../common/atoms/Text";

export default function CompleteUserInfo() {
  return (
    <div className="w-full bg-white">
      <Text className="border-0 border-b border-solid border-zinc-300 p-4 text-lg font-bold tracking-tight">
        배송지 정보
      </Text>
      <div className="flex flex-col gap-1 p-3 text-sm tracking-tighter">
        <div className="flex items-center gap-1">
          <span className="text-base font-bold">홍길동</span>
          <span>010-1234-5678</span>
        </div>
        <div className=" text-zinc-600">
          <span>(46241) 부산 금정구 부산대학로63번길 2 </span>
          <span>제 6공학관 203호</span>
        </div>
      </div>
    </div>
  );
}
