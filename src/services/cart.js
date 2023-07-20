import { instance } from "./index"; //axios instance

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
};

export const getCart = () => {
  return instance.get("/carts");
};

export const updateCart = (payload) => {
  return instance.post("/carts/update", payload);
};
