import { instance } from "./index";

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = async (payload) => {
    // const token =localStorage.getItem("token");
    return await instance.post ("/carts/add", payload);
};

export const getCart = () => {
    return instance.get("/carts");
};


/**
 * 장바구니 아이디와 수량을 받아서 업데이트
 * @param {object} items: cartId, quantity
 */
export const updateCart = (items) => {
    return instance.post("/carts/update", items);
};