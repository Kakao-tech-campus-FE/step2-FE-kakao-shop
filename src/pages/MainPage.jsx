import React, { useRef } from "react";
import { fetchProducts } from "../apis/product";
import ProductGrid from "../components/organisms/ProductGrid";
import useInfinieScroll from "../hooks/useInfinieScroll";

export default function MainPage() {
  const bottomObserver = useRef(null);
  const { error, data } = useInfinieScroll({
    queryKey: "/products",
    observeEl: bottomObserver,
    fetchFunction: fetchProducts,
  });

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <main className="mx-auto px-10 max-w-7xl">
      <ProductGrid allProducts={data.pages} />
      <div ref={bottomObserver}></div>
    </main>
  );
}
