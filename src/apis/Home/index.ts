import { client } from '@apis/client';
import type { Product } from 'types/product';

export const getProductsAPI = async (page: number = 0) => {
  const res = await client.get(`/products?page=${page}`);

  return res;
};

export type GetProductsResponse = {
  sucess: boolean;
  response: Product[];
  error: boolean;
};
