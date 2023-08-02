import { instance } from "./index"; // axios instance

// payload에 담기는 내용
// payload = {
//   optionId: 1,
//   quantity: 1,
// }

/**
 * 장바구니 담기
 * @param {object} payload
 * @returns
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
};
export const getCart = () => {
  return instance.get("/carts");
};

export const updateCart = (items) => {
  return instance.post("carts/update", items);
};