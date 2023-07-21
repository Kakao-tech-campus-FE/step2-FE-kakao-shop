import { instance } from "./index";

/**
 *  장바구니 담기
 * @param {object} payload

 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
};

export const getCart = async () => {
  return await instance.get("/carts");
};

export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};
