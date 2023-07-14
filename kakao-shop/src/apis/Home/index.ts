import { client } from '@apis/client';

export const getProductData = async (page: number = 0) => {
  const res = await client.get(`/products?page=${page}`);

  return res;
};
