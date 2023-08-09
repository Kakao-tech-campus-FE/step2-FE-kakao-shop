import React from "react";
import Card from "../../atoms/Card";
import Photo from "../../atoms/Photo";
import Box from "../../atoms/Box";
import { comma } from "../../../utils/convert";

export default function ProductCard({ product }) {
  const { id, productName, image, price } = product;

  return (
    <li className="mx-auto w-full">
      <Card to={`/product/${id}`}>
        <Box className="rounded-lg overflow-hidden">
          <Photo className="w-full h-40" src={image} alt={productName} hover />
        </Box>
        <h3 className="mb-1 mt-3 text-sm line-clamp-2">{productName}</h3>
        <p className="text-xl font-bold">{comma(price)}원</p>
      </Card>
    </li>
  );
}
