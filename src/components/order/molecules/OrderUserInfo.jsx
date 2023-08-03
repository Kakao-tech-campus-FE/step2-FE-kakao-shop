import React, { useState } from "react";
import Box from "../../common/atoms/Box";
import Text from "../../common/atoms/Text";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Button from "../../common/atoms/Button";
import Container from "../../common/atoms/Container";
import { DELIVERYOPTION_MAP } from "../../../utils/constant";

export default function OrderUserInfo({ isUserInfoOpen, setIsUserInfoOpen }) {
  const [deliveryReqirement, setDeliveryReqirement] =
    useState("배송 요청사항을 선택해주세요");
  const [deliveryReqirementText, setDeliveryReqirementText] = useState("");
  const handleOnChangeSelect = (e) => {
    setDeliveryReqirement(e.target.value);
    setDeliveryReqirementText(DELIVERYOPTION_MAP[e.target.value]);
  };
  const handleOnChangeText = (e) => {
    setDeliveryReqirementText(e.target.value);
  };

  return (
    <Container className="p-3">
      <Text className=" relative flex items-center tracking-tight">
        <span className="text-lg font-bold">배송지 정보 </span>{" "}
        <span>(kakao 계정 제공)</span>
        <Button
          className=" absolute right-0 border-0 bg-white"
          onClick={() => {
            setIsUserInfoOpen((prev) => !prev);
          }}
        >
          {isUserInfoOpen ? (
            <AiOutlineUp size="15" className=" cursor-pointer" />
          ) : (
            <AiOutlineDown size="15" className=" cursor-pointer " />
          )}
        </Button>
      </Text>
      {isUserInfoOpen && (
        <Box className="flex flex-col gap-2">
          <div className="pt-3">
            <span className="font-bold">홍길동</span>
            <span className=" ml-1 inline-block h-fit w-20 rounded-md bg-zinc-100 text-center text-sm tracking-tighter text-blue-500">
              기본 배송지
            </span>
            <p className="pt-1 text-sm">010-1234-5678</p>
          </div>
          <div className="flex flex-col text-sm tracking-tighter text-zinc-600">
            <span>(46241) 부산 금정구 부산대학로63번길 2</span>
            <span>제 6공학관 203호</span>
          </div>
          <select
            name="deliverySelect"
            id="delivery"
            className="h-10 w-full pl-2"
            onChange={handleOnChangeSelect}
            value={deliveryReqirement}
          >
            <option disabled value="배송 요청사항을 선택해주세요">
              배송 요청사항을 선택해주세요
            </option>
            <option value="배송전 연락바랍니다.">배송전 연락바랍니다.</option>
            <option value="부재시 경비실에 맡겨주세요.">
              부재시 경비실에 맡겨주세요
            </option>
            <option value="부재시 연락주세요.">부재시 연락주세요.</option>
            <option value="직접입력">직접입력</option>
          </select>
          <textarea
            name="deliveryText"
            rows="3"
            className="h-30 w-full overflow-clip p-3"
            onChange={handleOnChangeText}
            value={deliveryReqirementText}
            placeholder="배송시 요청사항을 입력해주세요.(최대 50자)"
          ></textarea>
        </Box>
      )}
    </Container>
  );
}
