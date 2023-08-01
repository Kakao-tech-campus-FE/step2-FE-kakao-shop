import { instance } from "./index";
/** 
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => { 
  return instance.post("/carts/add", payload);
}

export const getCart = () => {
  return instance.get("/carts");
}

/**
 * 장바구니 아이디와 수량을 받아서 업데이트를 진행
 * @param {object} items: cartId, quantity
 * @returns 
 */

export const updateCart = (items) => {
  return instance.post("/carts/update", items);
}