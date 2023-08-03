import React from "react";
import Box from "../../atoms/Box";
import Container from "../../atoms/Container";
import ResultProduct from "./ResultProduct";

export default function ResultProductsInfo({ productInfo }) {
  return (
    <article>
      <Box className="flex justify-center p-4 border">
        <p className="font-semibold">주문상품 정보</p>
      </Box>
      <Container className="flex flex-col gap-2 px-8 py-4 text-[15px] border-x border-b">
        <Box className="flex pb-2 border-b">
          <p className="w-28 font-semibold">주문번호</p>
          <span>{productInfo?.id}</span>
        </Box>
        <ul className="flex flex-col gap-4">
          {productInfo?.products.map((product, index) => (
            <ResultProduct
              key={index}
              index={index}
              product={product}
              length={productInfo?.products.length}
            />
          ))}
        </ul>
      </Container>
    </article>
  );
}
