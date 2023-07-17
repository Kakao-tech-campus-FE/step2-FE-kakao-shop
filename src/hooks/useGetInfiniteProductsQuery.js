import { useInfiniteQuery } from "react-query";
import productAPI from "@/api/productAPI.js";

function useGetInfiniteProductsQuery({ loaderRef }) {
  const changeLoaderDisplay = () => {
    if (!loaderRef || !loaderRef.current) return;
    loaderRef.current.style.display = "none";
  };

  const { data, fetchNextPage } = useInfiniteQuery(
    ["getAllProducts"],
    async ({ pageParam = 0 }) => {
      const { data } = await productAPI.getAllProducts({
        pageIndex: pageParam,
      });
      return data.response;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) {
          changeLoaderDisplay();
          return undefined;
        }
        return allPages.length;
      },
      suspense: true,
      retry: 1,
    }
  );

  return { data, fetchNextPage };
}

export default useGetInfiniteProductsQuery;
