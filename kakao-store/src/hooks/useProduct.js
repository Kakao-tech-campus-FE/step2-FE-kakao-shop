import { useInfiniteQuery } from 'react-query';
import { getProductList } from '../services/product';

export default function useProduct() {
  return useInfiniteQuery({
    queryKey: ['productList'],
    queryFn: async ({ pageParam = 0 }) => getProductList(pageParam),

    // 다음 pageParam의 수를 정해줌. undefined일 시 무한 스크롤 마침.
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.length
    ),
  });
}