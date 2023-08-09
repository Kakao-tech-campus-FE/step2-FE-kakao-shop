import instance from './index';

/**
 * 장바구니 담기
 * @param {object} payload 내용 : optionId, quantity
 * @returns Promise AxiosResponse
 */
export const addCart = (payload) => {
  return instance.post('/carts/add', payload);
};

export const getCart = () => {
  return instance.get('/carts');
};
/**
 * 장바구니 아이디와 수량을 받아서 업데이트
 * @param {obejct} items:cartId, quantity
 */
export const updateCart = (items) => {
  return instance.post('/carts/update', items);
};
