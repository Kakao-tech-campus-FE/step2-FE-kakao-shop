import { client } from '@apis/client';

import { AddCartPayload } from '@components/page/Detail/PurchaseButtons';

export const getProductDetail = async (id: string) => {
  const res = await client.get(`/products/${id}`);

  return res;
};
export const addCartItem = async (payload: AddCartPayload[]) => {
  const res = await client.post(`/carts/add`, payload);

  return res;
};
