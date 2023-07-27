import React from "react";
import Box from "../../atoms/Box";

export default function OptionItem({ index, option, onClick }) {
  return (
    <li
      className="flex px-4 py-2 border-b cursor-pointer"
      onClick={() => onClick(option)}
    >
      <span>{index + 1}.</span>
      <Box className="pl-2">
        <h4 className="w-72 break-keep">{option.optionName}</h4>
        <span>{option.price}</span>
      </Box>
    </li>
  );
}
