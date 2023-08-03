import { instance } from "./index";

export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
};

export const getCart = () => {
  return instance.get("/carts");
};
/**
  * 장바구니 아이디와 수량을 받아서 업데이트를 진행
  * @param {object} payload : cartId, quantity

*/

export const updateCart = (payload) => {
  return instance.post("/carts/update", payload);
};
