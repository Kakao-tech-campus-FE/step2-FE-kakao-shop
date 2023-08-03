import { client } from '@apis/client';
import type { CartProduct } from 'types/product';

export const getCartsAPI = async () => {
  const res = await client.get(`/carts`);

  return res;
};

export const updateCartsAPI = async (payload: UpdateCartsRequest[]) => {
  const res = await client.post(`/carts/update`, payload);

  return res;
};

export type UpdateCartsRequest = {
  cartId: number;
  quantity: number;
};

export type GetCartsResponse = {
  sucess: boolean;
  response: {
    products: CartProduct[];
    totalPrice: number;
  };
  error: boolean;
};
