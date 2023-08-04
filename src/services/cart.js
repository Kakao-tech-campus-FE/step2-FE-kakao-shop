import { instance } from '.';
import ENDPOINT from '../constants/ENDPOINT';

/**
 * 장바구니 담기
 * @param {object} items
 */
export const addCart = (items) => {
    return instance.post(ENDPOINT.ADDCART, items);
};

export const getCart = () => {
    return instance.get(ENDPOINT.GETCART);
};

/**
 *
 * @param {object} items : cartId, quantity
 * @returns
 */
export const updateCart = (items) => {
    return instance.post(ENDPOINT.UPDATECART, items);
};
