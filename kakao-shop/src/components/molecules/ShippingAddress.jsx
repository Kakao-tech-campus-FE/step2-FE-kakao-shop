import FoldingBox from "../atoms/FoldingBox";
import { useState } from "react";

const ShippingAddress = () => {
  const data = {
    name: "송지혜",
    phone: "010-0000-0000",
    address: "(46286) 부산 금정구 금강로 123",
    addressDetail: "(장전동, 가나다라) 2동 101호",
  };

  const [shippingRequestOption, setShippingRequestOption] = useState(0);
  const [shippingRequestText, setShippingRequestText] = useState("");

  const handleSelectChange = (e) => {
    setShippingRequestOption(e.target.value);
    if (e.target.options[e.target.selectedIndex].innerText === "직접입력")
      setShippingRequestText("");
    else
      setShippingRequestText(
        e.target.options[e.target.selectedIndex].innerText
      );
  };

  const handleTextareaChange = (e) => {
    setShippingRequestText(e.target.value);
  };

  return (
    <FoldingBox title="배송지 정보" supplementary="(kakao 계정 제공)">
      <div className="mt-4">
        <div className="flex item-center gap-2 mb-1">
          <span className="font-bold text-lg">{data.name}</span>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 self-center text-sm text-blue-400">
            우리집
          </span>
        </div>
        <span className="text-md">010-0000-0000 </span>
        <div className="mt-2 text-sm text-gray-500">
          <span>{data.address}</span>
          <br />
          <span>{data.addressDetail}</span>
        </div>
      </div>
      <select
        id="shipping-request"
        className="mt-4 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 text-sm appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
        onChange={handleSelectChange}
        value={shippingRequestOption}
      >
        <option value="0" disabled>
          배송 요청사항을 선택해주세요
        </option>
        <option value="1">배송 전 연락바랍니다.</option>
        <option value="2">부재시 경비실에 맡겨주세요.</option>
        <option value="3">부재시 연락주세요.</option>
        <option value="4">직접입력</option>
      </select>
      <textarea
        type="text"
        className="mt-4 w-full h-20 border border-gray-300 rounded-md py-2 px-3 text-gray-800 text-sm appearance-none focus:outline-none focus:ring-0 focus:border-black peer resize-none"
        placeholder="배송 요청사항을 입력해주세요"
        onChange={handleTextareaChange}
        value={shippingRequestText}
      />
    </FoldingBox>
  );
};

export default ShippingAddress;
