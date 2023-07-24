import { instance } from "./index"; // axios instance

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (items) => {
  // items: {
  //   optionId: 1
  //   quantity: 1
  // }
  return instance.post("/carts/add", items);
};

export const getCart = () => {
  return instance.get("/carts");
};

export const updateCart = (items) => {
  return instance.post("/carts/update", it - tems);
};
