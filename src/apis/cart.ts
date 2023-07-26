import { AddCartOption, UpdateCartOption } from '../types/product';
import { kakaoShoppingInstance } from './instance';

export async function addCart(options: AddCartOption[], auth: string) {
  return kakaoShoppingInstance.post('/carts/add', options, {
    headers: {
      Authorization: auth,
    },
  });
}

export async function getCart(auth: string) {
  return kakaoShoppingInstance.get('/carts', {
    headers: {
      Authorization: auth,
    },
  });
}

export async function updateCart(
  carts: UpdateCartOption[],
  auth: string,
) {
  return kakaoShoppingInstance.post('/carts/update', carts, {
    headers: {
      Authorization: auth,
    },
  });
}
