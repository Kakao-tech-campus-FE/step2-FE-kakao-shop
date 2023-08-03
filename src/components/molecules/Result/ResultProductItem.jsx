import React from "react";
import Box from "../../atoms/Box";

export default function ResultProductItem({ index, item }) {
  return (
    <li className="flex">
      <span className="w-28 font-semibold">옵션 {index + 1}.</span>
      <Box className="flex">
        <span className="mr-4">{item.optionName},</span>
        <span>{item.quantity}개</span>
      </Box>
    </li>
  );
}
