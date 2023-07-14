import React from "react";
import Container from "../atoms/Container";
import ProductCard from "../molecules/ProductCard";
import Loader from "../atoms/Loader";

export default function ProductGrid({ products, isLoading, isFetching }) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className=" grid grid-cols-3 py-5 gap-y-10 gap-x-4 justify-items-center max-md:grid-cols-2 ">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFetching={isFetching}
            />
          ))}
        </Container>
      )}
    </>
  );
}

// ⭐️ presentational component
// - 데이터를 받아서 단순히 화면에 표시하는 역할 -> 내부에서 상태관리X
