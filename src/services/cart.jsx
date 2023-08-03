import { instance } from "./index"

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
    //payload 에는 옵션아이디와 퀀터티
    return instance.post('/carts/add', payload);
}

export const getCart = () => {
    return instance.get('/carts');
}

export const updateCart = (items) => {
    return instance.post('/carts/update',items);
}