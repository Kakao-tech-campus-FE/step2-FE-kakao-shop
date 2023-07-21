import { AddCartOption } from '../types/product';
import { kakaoCartInstance } from '../utils/axios';

export async function requestAddCart(options: AddCartOption[], auth: string) {
  const response = await kakaoCartInstance.post('/carts/add', options, {
    headers: {
      Authorization: auth,
    },
  });

  return response;
}

export async function getCart(auth: string) {
  return kakaoCartInstance.get('/carts', {
    headers: {
      Authorization: auth,
    },
  });
}

export async function requestUpdateCart(
  cartId: number,
  quantity: number,
  auth: string,
) {
  return kakaoCartInstance.post('/carts/update', [{
    cartId,
    quantity,
  }], {
    headers: {
      Authorization: auth,
    },
  });
}
