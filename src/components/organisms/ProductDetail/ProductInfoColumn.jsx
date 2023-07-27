import React from "react";
import Photo from "../../atoms/Photo";
import Box from "../../atoms/Box";
import StarBox from "../../molecules/ProductDetail/StarBox";
import Button from "../../atoms/Button";
import { comma, discount } from "../../../utils/convert";

export default function ProductInfoColumn({ productData }) {
  const { image, productName, starCount, price } = productData;

  return (
    <section className="flex justify-between basis-2/3 shrink-0 py-8 pr-8">
      <Photo className="shrink-0 w-detailImage" src={image} alt={productName} />
      <Box className="ml-5">
        <StarBox count={starCount} />
        <h1 className="mt-2 mb-3 text-2xl font-semibold">{productName}</h1>
        <Button
          padding="px-6 py-3"
          textsize="sm"
          font="bold"
          color="yellow"
          radius="lg"
          disabled={true}
        >
          톡딜가 {comma(discount(price))}원 ~
        </Button>
      </Box>
    </section>
  );
}
