import React from "react";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";

export default function DeliveryForm() {
  return (
    <article className="mt-8 pb-4 border-b">
      <Box className="flex items-center mb-1">
        <div className="w-16">
          <strong>배송방법</strong>
        </div>
        <div className="grow ml-2 pl-3">
          <span>택배배송</span>
        </div>
      </Box>
      <Box className="flex items-center">
        <div className="w-16">
          <Label htmlFor="deliveryFee">
            <strong>배송비</strong>
          </Label>
        </div>
        <select
          className="grow ml-2 py-1 px-3 text-sm bg-gray-100 rounded-sm border"
          name="deliveryFee"
          id="deliveryFee"
          disabled
        >
          <option value="무료">무료</option>
        </select>
      </Box>
      <p className="pt-2 text-sm">
        제주 추가 3,000원, 제주 외 도서지역 추가 6,000원
      </p>
    </article>
  );
}
