import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Photo from "../../atoms/Photo";
import Box from "../../atoms/Box";
import productInstance from "../../../apis/product";
import { comma } from "../../../utils/convert";

export default function OrderProductItem({
  cartItem,
  productId,
  productName,
  border,
}) {
  const navigate = useNavigate();
  const { error, data } = useQuery(
    ["products", productId],
    () => productInstance.getProductById(productId),
    {
      staleTime: 1000 * 60,
    }
  );

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <li
      className={`flex items-center gap-4 py-5 ${
        border ? "border-b" : ""
      } cursor-pointer`}
      onClick={() => navigate(`/product/${productId}`)}
    >
      <Box className="border rounded overflow-hidden">
        <Photo className="w-16 h-16" src={data.image} alt={data.productName} />
      </Box>
      <Box>
        <p className="text-[15px] font-semibold">{productName}</p>
        <p className="text-[13px] text-gray-950">
          [옵션] 옵션선택: {cartItem.option.optionName}, {cartItem.quantity}개
        </p>
        <p>
          <span className="font-bold">{comma(cartItem.price)}</span>원
        </p>
      </Box>
    </li>
  );
}
