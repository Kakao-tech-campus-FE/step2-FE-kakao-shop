import { ProductThumbnail } from '../types/product';
import { kakaoInstance } from './instance';

export async function getProductList(pageIndex: number): Promise<ProductThumbnail[]> {
  const response = await kakaoInstance.get(`/products?page=${pageIndex}`);

  return response.data.response;
}

export async function getProductDetail(productId: number) {
  const response = await kakaoInstance.get(`/products/${productId}`);

  return response;
}
