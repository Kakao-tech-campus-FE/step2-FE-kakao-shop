import React from "react";
import Card from "../../common/atoms/Card";
import { comma } from "../../../utils/convert";
import Box from "../../common/atoms/Box";
import Photo from "../../common/atoms/Photo";
import Container from "../../common/atoms/Container";
import ProductCardSkeleton from "../atoms/ProductCardSkeleton";

export default function ProductCard({ product, isFetching }) {
  return (
    <>
      {isFetching ? (
        <ProductCardSkeleton />
      ) : (
        <Card to={`/product/${product.id}`} className="no-underline">
          <Container className="flex flex-col items-start h-96 border-slate-200 border-solid p-5 w-64">
            <Photo
              className="card"
              src={process.env.REACT_APP_API_URL + product.image}
              alt={product.productName}
            />
            <Box className=" font-bold text-black no-underline pt-5">
              {product.productName}
            </Box>
            <Box className=" text-slate-500 pt-5">{comma(product.price)}원</Box>
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
