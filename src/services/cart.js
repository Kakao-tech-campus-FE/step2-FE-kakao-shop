import { instance } from "./index";

export const addCart = (items) => {
  return instance.post("/cart/add", items);
};

export const getCart = () => {
  return instance.get("/cart");
};

/**
 * 장바구니 아이디와 수량을 받아서 업데이트를 진행
 * @param {object} items: cartId, quantity
 */
export const updateCart = (items) => {
  return instance.post("/cart/update", items);
};
