import { fetchProducts } from "../apis/product";
import { useInfiniteQuery } from "react-query";
import { PRODUCT_NUM_PER_PAGE } from "../utils/constant";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const infiniteQuery = useInfiniteQuery(
    ["products"],
    // pageParam의 초기값은 undefined이므로 0으로 설정해준다.
    ({ pageParam = 0 }) => fetchProducts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < PRODUCT_NUM_PER_PAGE) {
          return undefined;
        }
        return allPages.length;
      },
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    // 한번 더 데이터를 검증해서 중복되는 데이터를 제거한다.
    if (infiniteQuery.data) {
      const allFetchedProducts = infiniteQuery.data.pages.flat();
      setProducts((prev) => _.unionBy([...prev, ...allFetchedProducts], "id"));
    }
  }, [infiniteQuery.data]);

  return {
    products,
    ...infiniteQuery,
  };
}
