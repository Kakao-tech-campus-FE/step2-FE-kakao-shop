import getCookie from '../utils/getCookie';
import instance from './instance';
import { PayResponse } from '../types/Pay';

export async function Pay() {
  const token = getCookie('user');
  const data = await instance<unknown, PayResponse>('/orders/save', {
    method: 'post',
    headers: {
      Authorization: token,
    },
  });
  return data;
}
