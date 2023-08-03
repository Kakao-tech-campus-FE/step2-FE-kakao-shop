import { useState } from "react";
import { useSelector } from "react-redux";

import { convertToPrice } from "utils/convert.js";

export default function OrderInformation({ data }) {
  const email = useSelector((state) => state.user.email);
  const [request, setRequest] = useState("");

  const handleRequestChange = (event) => {
    setRequest(() => event.target.value);
  };

  return (
    <div className="space-y-2 text-left">
      <div className="p-3 bg-white border text-left">
        <p className="mb-2 text-lg font-bold">배송지 정보</p>
        <p className="mb-1 space-x-1">
          <span className="font-bold">
            {/[^@]*/.exec(email).toString().toUpperCase()}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-blue-500">
            기본 배송지
          </span>
        </p>
        <div className="mb-2 text-sm">
          <p>010-1234-5678</p>
          <p>(12345) 광주광역시 북구 전남대로 6번길 7-8</p>
        </div>
        <select
          className="w-full mb-2 px-1 py-2 rounded border text-sm"
          onChange={handleRequestChange}
          defaultValue=""
        >
          <option value="" disabled={true}>
            배송 요청사항을 선택해주세요
          </option>
          <option value="배송 전 연락바랍니다.">배송 전 연락바랍니다.</option>
          <option value="부재 시 경비실에 맡겨주세요.">
            부재 시 경비실에 맡겨주세요.
          </option>
          <option value="부재 시 연락주세요.">부재 시 연락주세요.</option>
          <option value="">직접입력</option>
        </select>
        <textarea
          className="w-full h-16 resize-none p-2 rounded border text-sm"
          placeholder="배송 시 요청사항을 선택해주세요 (최대 50자)"
          onChange={handleRequestChange}
          value={request}
        />
      </div>
      <div className="bg-white border">
        <p className="p-3 border-b text-lg font-bold">주문상품 정보</p>
        {data.products.map((product) =>
          product.carts.map((cart) => (
            <div key={cart.id} className="p-3 border-b">
              <p className="text-sm font-bold">{product.productName}</p>
              <p className="text-sm">
                [옵션] {cart.option.optionName}, {cart.quantity}개
              </p>
              <p className="font-bold">{convertToPrice(cart.price)}</p>
            </div>
          ))
        )}
      </div>
      <div className="bg-white border">
        <div className="p-3 border-b text-lg font-bold">결제정보</div>
        <div className="flex justify-between p-3 ">
          <span className="">최종 결제금액</span>
          <span className="text-lg font-bold">
            {convertToPrice(data.totalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
