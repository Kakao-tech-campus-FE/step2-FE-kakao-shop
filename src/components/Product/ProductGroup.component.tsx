import { Product } from "@/dtos/product.dto";
import ProductCard from "./ProductCard.component";
import { commonAxios } from "@/functions/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useRef } from "react";
import ProductSkeleton from "@/components/Product/ProductSkeleton.component";
import _ from "lodash/";

interface getProductResult {
  result: Product[];
  nextPage: number;
  hasNextPage?: boolean;
}

const ProductGroup = () => {
  const productsRef = useRef<HTMLDivElement | null>(null);

  const getProducts = async (pageData: { pageParam?: number }) => {
    const pageParam = pageData?.pageParam ?? 0;
    const { data } = await commonAxios.get(`/products?page=${pageParam}`);

    const lazyReturn = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: data.response,
          nextPage: data.response.length < 10 ? pageParam + 1 : undefined,
        });
      }, 3000);
    });

    return lazyReturn as getProductResult;

    return {
      result: data.response,
      nextPage: pageParam + 1,
    };
  };

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasNextPage) return;
            fetchNextPage();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="grid grid-cols-4 gap-6" ref={productsRef}>
      {data &&
        data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.result.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Fragment>
        ))}
      {isFetching && _.range(8).map((_, i) => <ProductSkeleton key={i} />)}
    </div>
  );
};

export default ProductGroup;
