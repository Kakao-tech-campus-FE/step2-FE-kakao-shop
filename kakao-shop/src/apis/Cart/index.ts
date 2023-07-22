import { client } from '@apis/client';

export type UpdateCartsRequest = {
  cartId: number;
  quantity: number;
};

export const getCartsAPI = async () => {
  const res = await client.get(`/carts`);

  return res;
};

export const updateCartsAPI = async (payload: UpdateCartsRequest[]) => {
  const res = await client.post(`/carts/update`, payload);

  return res;
};
