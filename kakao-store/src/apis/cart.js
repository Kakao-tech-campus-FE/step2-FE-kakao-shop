import { instance } from "./api";

/** 
 * 장바구니에 추가하는 api 호출
 * @param { {optionId: number, quantity: number} } payload
 */
export const addCart = (payload) => {
    return instance.post("/carts/add", payload);
};

export const updateCart = (payload) => {
    return instance.post("/carts/update", payload);
};

export const getCart = () => {
    return instance.get("/carts");
};