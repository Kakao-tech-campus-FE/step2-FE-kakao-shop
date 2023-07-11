import React from "react";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

export default function ProductCard({ product }) {
  const { id, productName, image, price } = product;

  return (
    <li>
      <Card to={`/product/${id}`}>
        <Photo width="w-72" heigth='h-40' src={image} alt={productName} />
        <h3>{productName}</h3>
        <p>{comma(price)}</p>
      </Card>
    </li>
  );
}
