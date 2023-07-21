import { ProductThumbnail } from '../types/product';
import { kakaoProductInstance } from '../utils/axios';

export async function getProductList(pageIndex: number): Promise<ProductThumbnail[]> {
  const response = await kakaoProductInstance.get(`/products?page=${pageIndex}`);

  return response.data.response;
}

export async function getProductDetail(productId: number) {
  const response = await kakaoProductInstance.get(`/products/${productId}`);

  return response;
}
