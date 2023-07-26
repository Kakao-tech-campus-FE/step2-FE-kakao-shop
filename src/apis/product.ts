import { ProductThumbnail } from '../types/product';
import { kakaoShoppingInstance } from './instance';

export async function getProductList(pageIndex: number): Promise<ProductThumbnail[]> {
  const response = await kakaoShoppingInstance.get(`/products?page=${pageIndex}`);

  return response.data.response;
}

export async function getProductDetail(productId: number) {
  const response = await kakaoShoppingInstance.get(`/products/${productId}`);

  return response;
}
