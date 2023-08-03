import React from "react";
import Box from "../../atoms/Box";
import ResultProductItem from "../../molecules/Result/ResultProductItem";

export default function ResultProduct({ index, product, length }) {
  return (
    <li className="flex flex-col gap-2 pt-2">
      <Box className="flex">
        <span className="w-28 font-semibold">상품명</span>
        <p className="font-semibold">{product.productName}</p>
      </Box>
      <ul
        className={`flex flex-col gap-2 pb-4 ${
          index !== length - 1 ? "border-b" : ""
        }`}
      >
        {product.items.map((item, index) => (
          <ResultProductItem key={index} index={index} item={item} />
        ))}
      </ul>
    </li>
  );
}
