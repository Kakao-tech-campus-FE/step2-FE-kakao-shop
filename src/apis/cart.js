import { instance } from './index';

/**
 * 장바구니 담기
 * @param {object} payload
 * @returns
 */
export const addCart = (payload) => {
  // payload: {
  //     optionId: 1,
  //     quantity: 1,
  // }
  return instance.post('/carts/add', payload);
};

export const getCart = () => {
  return instance.get('/carts');
};

export const updateCart = (items) => {
  return instance.post('/carts/update', items);
};
