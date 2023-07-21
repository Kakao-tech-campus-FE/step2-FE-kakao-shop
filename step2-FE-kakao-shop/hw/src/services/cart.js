import { instance } from "./index"; // axios instance

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  // payload: {
  //   optionId: 1
  //   quantity: 1
  // }
  return instance.post("/carts/add", payload);
};
