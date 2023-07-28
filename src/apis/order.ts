import { kakaoInstance } from './instance';

export async function completeOrder(auth: string) {
  return kakaoInstance.post('/orders/save', null, {
    headers: {
      Authorization: auth,
    },
  });
}

export async function confirmOrder(orderId: number, auth: string) {
  return kakaoInstance.get(`/orders/${orderId}`, {
    headers: {
      Authorization: auth,
    },
  });
}
