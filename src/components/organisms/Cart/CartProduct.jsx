import React from "react";
import CartOptionItem from "./CartOptionItem";
import Box from "../../atoms/Box";
import { comma } from "../../../utils/convert";

export default function CartProduct({ product }) {
  const { productName, carts } = product;

  return (
    <li className="mb-4 px-5 py-6 bg-white border-y">
      <span className="font-bold">{productName}</span>
      <ul>
        {carts.map((item) => (
          <CartOptionItem key={`cart-item-key-${item.id}`} item={item} />
        ))}
      </ul>
      <Box className="flex justify-between mt-3 p-4 bg-gray-50 font-bold border">
        <span>주문금액 ({getQuantity(carts)}개)</span>
        <span>{comma(getPrice(carts))}원</span>
      </Box>
    </li>
  );
}

const getQuantity = (carts) => {
  return carts.reduce((pre, cur) => pre + cur.quantity, 0);
};
const getPrice = (carts) => {
  return carts.reduce((pre, cur) => pre + cur.price, 0);
};
