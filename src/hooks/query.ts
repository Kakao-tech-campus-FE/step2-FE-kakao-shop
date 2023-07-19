import { useInfiniteQuery } from '@tanstack/react-query';
import { getProductList } from '../apis/product';

export function useProduct() {
  return useInfiniteQuery({
    queryKey: ['productList'],
    queryFn: async ({ pageParam = 0 }) => getProductList(pageParam),
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.length
    ),
  });
}
