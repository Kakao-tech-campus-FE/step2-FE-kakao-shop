import { client } from '@apis/client';

export const getProductDetail = async (id: string) => {
  const res = await client.get(`/products/${id}`);

  return res;
};
