import { AddCartOption, UpdateCartOption } from '../types/product';
import { kakaoInstance } from './instance';

export async function addCart(options: AddCartOption[], auth: string) {
  return kakaoInstance.post('/carts/add', options, {
    headers: {
      Authorization: auth,
    },
  });
}

export async function getCart(auth: string) {
  return kakaoInstance.get('/carts', {
    headers: {
      Authorization: auth,
    },
  });
}

export async function updateCart(
  carts: UpdateCartOption[],
  auth: string,
) {
  return kakaoInstance.post('/carts/update', carts, {
    headers: {
      Authorization: auth,
    },
  });
}
