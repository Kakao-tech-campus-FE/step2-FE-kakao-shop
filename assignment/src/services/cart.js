import instance from './index';

/**
 * 장바구니 담기
 * @param {object} payload 내용 : optionId, quantity
 * @returns Promise AxiosResponse
 */
export const addCart = (payload) => {
  return instance.post('/carts/add', payload);
};
