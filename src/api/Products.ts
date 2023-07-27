import { cartData } from '../components/Detail/atoms/AddCartBtn';
import { AddCartResponse, GetCartResponse, ProductDetailResponse, ProductListResponse } from '../types/Product';
import getCookie from '../utils/getCookie';
import instance from './instance';

export default async function getProducts(page: number) {
  const data = await instance<unknown, ProductListResponse>(`/products?page=${page}`);
  return data;
}

export async function getDetailProduct(productId: string) {
  const data = await instance<unknown, ProductDetailResponse>(`/products/${productId}`);
  return data;
}

export async function addCart(cartData: cartData[]) {
  const token = getCookie('user');
  const data = await instance<unknown, AddCartResponse>(`/carts/add`, {
    method: 'post',
    headers: {
      Authorization: token,
    },
    data: cartData,
  });
  return data;
}

export async function getCart() {
  const token = getCookie('user');
  const data = await instance<unknown, GetCartResponse>('/carts', {
    headers: {
      Authorization: token,
    },
  });
  return data;
}

export async function updateCart(cartData: { cartId: number; quantity: number }[]) {
  const token = getCookie('user');
  const data = await instance<unknown, GetCartResponse>('/carts/update', {
    method: 'post',
    headers: {
      Authorization: token,
    },
    data: cartData,
  });
  return data;
}
