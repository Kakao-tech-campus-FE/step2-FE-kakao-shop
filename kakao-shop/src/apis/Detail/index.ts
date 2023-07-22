import { client } from '@apis/client';

export type AddCartItemRequest = { optionId: number; quantity: number };

export const getProductDetailAPI = async (id: string) => {
  const res = await client.get(`/products/${id}`);

  return res;
};
export const addCartItemAPI = async (payload: AddCartItemRequest[]) => {
  const res = await client.post(`/carts/add`, payload);

  return res;
};
