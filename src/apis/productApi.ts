import axios from 'axios';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { AddCart, Cart, CompleteOrder, UpdateCart } from '../dto/productDto';
import { queryClient } from '..';

const useGetProductsQuery = () => {
  const MAX_PAGE = 1;
  const fetcher = ({ pageParam = 0 }) =>
    axios
      .get('/products', { params: { page: pageParam } })
      .then(({ data }) => data.response)
      .catch((error) => {
        throw error;
      });

  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetcher,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length > MAX_PAGE) return undefined;
      return allPages.length;
    },
  });
};

const useGetProductQuery = (id: number) => {
  const fetcher = () =>
    axios
      .get(`/products/${id}`)
      .then(({ data }) => data.response)
      .catch((error) => {
        throw error;
      });

  return useQuery({
    queryKey: ['product'],
    queryFn: fetcher,
  });
};

const useGetCartQuery = () => {
  const fetcher = () =>
    axios
      .get(`/carts`)
      .then(({ data }) => data.response)
      .catch((error) => {
        throw error;
      });

  return useQuery<Cart>({
    queryKey: ['carts'],
    queryFn: fetcher,
  });
};

const useAddCartMutation = () => {
  const fetcher = (cartOptions: AddCart[]) =>
    axios
      .post(`/carts/add`, cartOptions)
      .then(({ data }) => data.response)
      .catch((error) => {
        throw error;
      });

  return useMutation({ mutationFn: fetcher });
};

const useUpdateCartMutation = () => {
  const fetcher = (cartOptions: UpdateCart[]) => axios.post(`/carts/update`, cartOptions);
  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      queryClient.invalidateQueries(['carts']);
    },
  });
};

const useOrderSaveMutation = () => {
  const fetcher = () => axios.post(`/orders/save`).then(({ data }) => data.response);

  return useMutation({ mutationFn: fetcher });
};

const useGetOrderQuery = (id: number) => {
  const fetcher = () => axios.get(`/orders/${id}`).then(({ data }) => data.response);

  return useQuery<CompleteOrder>({
    queryKey: ['order'],
    queryFn: fetcher,
  });
};

export {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCartQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useOrderSaveMutation,
  useGetOrderQuery,
};
