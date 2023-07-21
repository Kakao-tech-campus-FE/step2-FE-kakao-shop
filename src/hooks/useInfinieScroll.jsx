import { useCallback, useEffect } from "react";
import { useInfiniteQuery } from "react-query";

export default function useInfinieScroll({
  queryKey,
  observeEl,
  fetchFunction,
}) {
  const { error, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [queryKey],
      ({ pageParam = 0 }) => fetchFunction(pageParam),
      {
        // lastPage: useInfiniteQuery를 이용해 호출된 가장 마지막에 있는 페이지 데이터
        // allPages: useInfiniteQuery를 이용해 호출된 모든 페이지 데이터
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length;
          return lastPage.length !== 0 ? nextPage : undefined;
        },
      }
    );

  const handleObserver = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (hasNextPage && observeEl.current) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage, observeEl]
  );

  useEffect(() => {
    const observerEl = observeEl.current;
    const io = new IntersectionObserver(handleObserver, { threshold: 1 });
    io.observe(observerEl);

    return () => io.unobserve(observerEl);
  }, [handleObserver, observeEl]);

  return { error, data, hasNextPage, isFetchingNextPage };
}
