import { Product } from "@/dtos/product.dto";
import ProductCard from "./ProductCard.component";
import { commonAxios } from "@/functions/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import ProductSkeleton from "@/components/Product/ProductSkeleton.component";

interface getProductResult {
  result: Product[];
  nextPage: number;
}

const ProductGroup = () => {
  const getProducts = async (pageData: { pageParam?: number }) => {
    const pageParam = pageData?.pageParam ?? 0;
    const { data } = await commonAxios.get(`/products?page=${pageParam}`);

    const lazyReturn = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: data.response,
          nextPage: pageParam + 1,
        });
      }, 3000);
    });

    return lazyReturn as getProductResult;

    return {
      result: data.response,
      nextPage: pageParam + 1,
    };
  };

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <div className="grid grid-cols-4 gap-6">
      {data &&
        data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.result.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Fragment>
        ))}
      {(isLoading || isFetching) &&
        Array.from({ length: 12 }).map((_, i) => <ProductSkeleton key={i} />)}
      <button className="h-12 w-20" onClick={() => fetchNextPage()}>
        다음 페이지
      </button>
    </div>
  );
};

export default ProductGroup;
