import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { getProductDetail, getProductList } from '../apis/product';
import {
  addCart, getCart, updateCart,
} from '../apis/cart';
import { AddCartOption, UpdateCartOption } from '../types/product';
import { completeOrder, confirmOrder } from '../apis/order';

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

export function useAddCart() {
  return useMutation({
    mutationKey: ['addCart'],
    mutationFn: async (
      { selectedOptions, auth }: { selectedOptions: AddCartOption[], auth: string },
    ) => addCart(selectedOptions, auth),
  });
}

export function useGetCart(auth: string) {
  return useQuery({
    queryKey: ['getCart', { auth }],
    queryFn: async () => getCart(auth),
  });
}

export function useUpdateCart() {
  return useMutation({
    mutationKey: ['updateCart'],
    mutationFn: async (
      { updatedOptions, auth }: { updatedOptions: UpdateCartOption[], auth: string },
    ) => updateCart(updatedOptions, auth),
  });
}

export function useOrder() {
  return useMutation({
    mutationKey: ['order'],
    mutationFn: async ({ auth }: { auth: string }) => completeOrder(auth),
  });
}

export function useConfirmOrder(orderId: number, auth: string) {
  return useQuery({
    queryKey: ['confirmOrder', { auth, orderId }],
    queryFn: async () => confirmOrder(orderId, auth),
  });
}
