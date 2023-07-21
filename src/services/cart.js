import { instance } from '.';
import ENDPOINT from '../constants/ENDPOINT';

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
    return instance.post(ENDPOINT.ADDCART, payload);
};

export const getCart = () => {
    return instance.get(ENDPOINT.GETCART);
};

export const updateCart = (items) => {
    return instance.post(ENDPOINT.UPDATECART, items);
};
