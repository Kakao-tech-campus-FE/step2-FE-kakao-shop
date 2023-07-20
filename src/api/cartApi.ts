import instance from '.';
import { CartData } from './dto';

/**
 * 장바구니 담기
 * @param {object} data
 * @returns
 */

const addCart = (data: CartData) => {
  const { optionId, quantity } = data;
  return instance.post('/carts/add', { optionId, quantity });
};

export default addCart;
