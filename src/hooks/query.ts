import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getProductDetail, getProductList } from '../apis/product';
import { getCart } from '../apis/cart';

export function useProductList() {
  return useInfiniteQuery({
    queryKey: ['productList'],
    queryFn: async ({ pageParam = 0 }) => getProductList(pageParam),
    getNextPageParam: (lastPage, allPages) => (
      lastPage.length === 0 ? undefined : allPages.length
    ),
  });
}

export function useProductDetail(productId: number) {
  return useQuery({
    queryKey: ['productDetail', productId],
    queryFn: async () => getProductDetail(productId),
  });
}

export function useCart(auth: string) {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await getCart(auth);

      return response.data.response;
    },
  });
}
