import React from "react";
import Counter from "../molecules/Counter";
import { comma } from "../../utils/convert";
import Box from "../atoms/Box";

export default function CartOptionItem({ item }) {
  return (
    <li className="mt-3 px-4 py-3 border rounded">
      <span className="text-gray-600 font-semibold">
        {item.option.optionName}
      </span>
      <Box className="flex justify-between items-center pt-3">
        <Counter count={item.quantity} />
        <span className="font-bold">
          {comma(item.option.price * item.quantity)}원
        </span>
      </Box>
    </li>
  );
}
