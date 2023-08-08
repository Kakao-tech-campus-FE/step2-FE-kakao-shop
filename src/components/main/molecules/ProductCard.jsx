import React from "react";
import Card from "../../common/atoms/Card";
import { comma } from "../../../utils/convert";
import Box from "../../common/atoms/Box";
import Photo from "../../common/atoms/Photo";
import Container from "../../common/atoms/Container";
import ProductCardSkeleton from "../atoms/ProductCardSkeleton";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export default function ProductCard({ product, isFetching }) {
  return (
    <>
      {isFetching ? (
        <ProductCardSkeleton />
      ) : (
        <Card
          to={staticServerUrl + `/product/${product.id}`}
          className="no-underline"
        >
          <Container className="flex h-96 w-64 flex-col items-start border-solid border-zinc-300 p-5">
            <Photo
              className="card"
              src={staticServerUrl + `/images/${product.id}.jpg`}
              alt={product.productName}
            />
            <Box className=" pt-5 font-bold text-black no-underline">
              {product.productName}
            </Box>
            <Box className=" pt-5 text-slate-500">{comma(product.price)}원</Box>
          </Container>
        </Card>
      )}
    </>
  );
}

// ⭐️ img tag의 CSS 속성
// 1. width, height: 이미지 원본 크기를 가져옴
// 2. width값만 조정해도 height 역시 조정됨(비율 유지)
// 3. 이미지의 원본 크기가 표시 영역을 초과하는 경우, 이미지의 일부분만 보이게 됨

// ⭐️ 백엔드에서 imageUrl을 받을 경우
// -> 존재하지 않는 경우까지 고려해야된다.
