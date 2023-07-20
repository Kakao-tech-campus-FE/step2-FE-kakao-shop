import instance from '.';
import { CartData } from './dto';

/**
 * 장바구니 담기
 * @param {object} data
 * @returns
 */

const addCart = (payload: CartData[]) => {
  return instance.post('/carts/add', payload);
};

export default addCart;
