import { client } from '@apis/client';

export const getCarts = async () => {
  const res = await client.get(`/carts`);

  return res;
};
