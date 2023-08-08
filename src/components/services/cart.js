import { instance } from "."

/**
 * 장바구니 담기
 * @param {object} payload 
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
  
};

export const getCart = (payload) => {
  return instance.get("/carts", payload);
};

export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};