import { Product } from "@/dtos/product.dto";
import ProductCard from "@/components/ProductList/ProductCard.component";
import { commonAxios } from "@/functions/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import ProductSkeleton from "@/components/ProductList/ProductSkeleton.component";
import range from "lodash/range";
import { PRODUCT } from "@/assets/product.ko";
import Txt from "../common/Txt.component";

const { NO_PRODUCT } = PRODUCT;

const ProductGroup = () => {
  const productsRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const getProducts = async (pageData: { pageParam?: number }) => {
    const pageParam = pageData?.pageParam ?? 0;
    const { data } = await commonAxios.get(`/products?page=${pageParam}`);

    return {
      result: data.response,
      nextPage: pageParam + 1,
    };
  };

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    getNextPageParam: (lastPage) =>
      lastPage.nextPage < 2 ? lastPage.nextPage : undefined,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            if (!hasNextPage) return;
            fetchNextPage();
          }
        },
        { root: productsRef.current, threshold: 1 }
      );
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      <div className="grid grid-cols-3 gap-6 auto-rows-fr">
        {data &&
          data.pages
            .flatMap((pages) => pages.result)
            .map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        {isFetching && range(9).map((i) => <ProductSkeleton key={i} />)}
      </div>
      <div className="h-0" ref={cardRef} />
      {!isFetching && !hasNextPage && (
        <div className="flex w-full justify-center my-4">
          <Txt typograph="p" className="text-gray-400">
            {NO_PRODUCT}
          </Txt>
        </div>
      )}
    </>
  );
};

export default ProductGroup;
