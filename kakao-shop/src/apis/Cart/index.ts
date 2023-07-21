import { client } from '@apis/client';

import { SubmitData } from '@hooks/page/Cart/useCartForm';

export const getCarts = async () => {
  const res = await client.get(`/carts`);

  return res;
};

export const postCarts = async (payload: SubmitData[]) => {
  const res = await client.post(`/carts/update`, payload);

  return res;
};
