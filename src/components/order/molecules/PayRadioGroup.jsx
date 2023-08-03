import React, { useState } from "react";
import Radio from "../../common/atoms/Radio";
import Box from "../../common/atoms/Box";
import { KAKAOPAY_METHOD } from "../../../utils/constant";

export default function PayRadioGroup() {
  const [payMethod, setPayMethod] = useState("kakaopaymoney");
  const handleOnChange = (e) => {
    setPayMethod(e.target.value);
  };
  return (
    <Box className="flex w-full flex-col gap-2 bg-[#ffea00] py-8">
      {KAKAOPAY_METHOD.map((method) => (
        <Radio
          id={method.id}
          name="pay"
          key={method.id}
          value={method.id}
          label={method.label}
          onChange={handleOnChange}
          checked={payMethod === method.id}
          inputClassName={"h-0 w-0"}
          labelClassName={`flex items-center gap-3 cursor-pointer w-fit ${
            payMethod === method.id ? "font-bold" : "font-normal"
          }`}
          children={
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-solid bg-white">
              <span
                className={`rounded-full ${
                  payMethod === method.id
                    ? "h-4 w-4 bg-black"
                    : "h-3 w-3 bg-zinc-200"
                }`}
              ></span>
            </span>
          }
        />
      ))}
    </Box>
  );
}
