import { client } from '@apis/client';
import type { ProductDetail } from 'types/product';

export type AddCartItemRequest = { optionId: number; quantity: number };

export type GetProductDetailResponse = {
  sucess: boolean;
  response: ProductDetail;
  error: boolean;
};

export const getProductDetailAPI = async (id: string) => {
  const res = await client.get(`/products/${id}`);

  return res;
};
export const addCartItemAPI = async (payload: AddCartItemRequest[]) => {
  const res = await client.post(`/carts/add`, payload);

  return res;
};
