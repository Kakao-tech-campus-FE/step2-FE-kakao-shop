import { useInfiniteQuery } from "@tanstack/react-query";
import productAPI from "@/api/productAPI.js";
import API from "@/constants/API.js";

function useGetInfiniteProductsQuery({ loader }) {
  const changeLoaderDisplay = () => {
    if (!loader) return;
    loader.style.display = "none";
  };

  const { data, fetchNextPage } = useInfiniteQuery(
    [API.KEYS.GET_ALL_PRODUCTS],
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
