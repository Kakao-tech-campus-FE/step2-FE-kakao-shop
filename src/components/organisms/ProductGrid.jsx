import React, { useRef } from "react";
import ProductCard from "../molecules/ProductCard";
import useInfinieScroll from "../../hooks/useInfinieScroll";
import productInstance from "../../apis/product";
import Loader from "../atoms/Loader";

export default function ProductGrid() {
  const bottomObserver = useRef(null);
  const { error, data, hasNextPage, isFetchingNextPage } = useInfinieScroll({
    queryKey: "/products",
    observeEl: bottomObserver,
    fetchFunction: productInstance.fetchProducts,
  });

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 pt-8 pb-20">
        {data.pages.map((page) =>
          page.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </ul>
      <div ref={bottomObserver} className="absolute bottom-0 mx-auto w-full">
        {isFetchingNextPage && hasNextPage ? <Loader height="h-20" /> : ""}
      </div>
    </>
  );
}
