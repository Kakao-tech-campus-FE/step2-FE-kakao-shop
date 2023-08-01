import React, { useRef } from "react";
import ProductCard from "../../molecules/Main/ProductCard";
import Loader from "../../molecules/Common/Loader";
import useInfinieScroll from "../../../hooks/useInfinieScroll";
import productInstance from "../../../apis/product";

export default function ProductGrid() {
  const bottomObserver = useRef(null);
  const { error, data, hasNextPage, isFetchingNextPage } = useInfinieScroll({
    queryKey: ["/products"],
    observeEl: bottomObserver,
    fetchFunction: productInstance.fetchProducts,
  });

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <ul className="grid grid-cols-4 gap-2 gap-y-4 mx-auto pt-8 pb-20 max-w-7xl">
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
