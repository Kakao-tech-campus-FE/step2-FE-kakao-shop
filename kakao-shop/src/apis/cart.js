import { instance } from './index';
/**
 * 장바구니 담기
 * @param {object} payload - {optionId, quantity}
 */
export const addCart = (payload) => {
  return instance.post('/carts/add', payload);
};

export const getCart = () => {
  return instance.get('/carts');
};

export const updateCart = (items) => {
  return instance.post('/carts/update', items);
};
