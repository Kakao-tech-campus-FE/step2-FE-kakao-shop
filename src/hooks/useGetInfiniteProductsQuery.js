import { useInfiniteQuery } from "react-query";
import productAPI from "@/api/productAPI.js";

function useGetInfiniteProductsQuery({ observer, loaderRef }) {
  const deleteObserver = () => {
    const unobserve = observer?.observe(loaderRef.current);
    observer && unobserve?.();

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
          deleteObserver();
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
