import instance from '.';
import { AddCartedItem, EditCartedItem } from './dto';

/**
 * 장바구니 담기
 * @param {object} data
 * @returns
 */

const addCart = (data: AddCartedItem[]) => {
  return instance.post('/carts/add', data);
};

const queryCart = () => {
  return instance.get('/carts');
};

const updateCart = (data: EditCartedItem[]) => {
  return instance.post('/carts/update', data);
};

export { addCart, queryCart, updateCart };
