import { instance } from "./index";

/**
 * 장바구니 담기
 * @param {Array} payload 
 */
export const addCart = (payload) => {
    console.log('addCart', payload);
    return instance.post("/carts/add", payload);
}

/**
 * 장바구니 조회
 */
export const getCart = () => {
    return instance.get("/carts");
}

/**
 * 장바구니 수정
 * @param {object} payload 
 */
export const updateCart = (payload) => {
    return instance.post("/carts/update", payload);    
}
