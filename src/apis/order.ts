import { kakaoShoppingInstance } from './instance';

export async function completeOrder(auth: string) {
  return kakaoShoppingInstance.post('/orders/save', null, {
    headers: {
      Authorization: auth,
    },
  });
}

export async function confirmOrder(orderId: number, auth: string) {
  return kakaoShoppingInstance.get(`/orders/${orderId}`, {
    headers: {
      Authorization: auth,
    },
  });
}
