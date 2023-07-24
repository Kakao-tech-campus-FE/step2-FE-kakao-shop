import { AddCartOption } from '../types/product';
import { kakaoShoppingInstance } from './instance';

export async function requestAddCart(options: AddCartOption[], auth: string) {
  const response = await kakaoShoppingInstance.post('/carts/add', options, {
    headers: {
      Authorization: auth,
    },
  });

  return response;
}

export async function getCart(auth: string) {
  return kakaoShoppingInstance.get('/carts', {
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
  return kakaoShoppingInstance.post('/carts/update', [{
    cartId,
    quantity,
  }], {
    headers: {
      Authorization: auth,
    },
  });
}
