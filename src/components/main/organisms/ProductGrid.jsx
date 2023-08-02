import React from "react";
import Container from "../../common/atoms/Container";
import ProductCard from "../molecules/ProductCard";

export default function ProductGrid({ products, isFetching }) {
  return (
    <Container className=" grid grid-cols-4 py-5 gap-y-10 gap-x-4 justify-items-center max-md:grid-cols-2 max-lg:grid-cols-3 ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFetching={isFetching}
        />
      ))}
    </Container>
  );
}

// ⭐️ presentational component
// - 데이터를 받아서 단순히 화면에 표시하는 역할 -> 내부에서 상태관리X
