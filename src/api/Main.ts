import { ProductListResponse } from '../types/Product';
import instance from './instance';

export default async function getProducts(page: number) {
  const data = await instance<unknown, ProductListResponse>(`/products?page=${page}`);
  return data;
}
