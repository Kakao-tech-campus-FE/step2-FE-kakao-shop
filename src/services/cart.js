import { instance } from "./index"; //axios instance

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", pay
  load);
};
