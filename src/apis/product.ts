import { ProductData } from '../types/product';
import { KAKAO_API_BASEURL, createAxiosInstance } from '../utils/axios';

const axiosProductInstance = createAxiosInstance(
  KAKAO_API_BASEURL,
  3000,
);

export async function getProductList(pageIndex: number): Promise<ProductData[]> {
  const response = await axiosProductInstance.get(`/products?page=${pageIndex}`);

  return response.data.response;
}
