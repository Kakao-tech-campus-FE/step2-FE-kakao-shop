import {instance} from './index';

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
    console.log(payload);
    return instance.post("/carts/add", payload);
};