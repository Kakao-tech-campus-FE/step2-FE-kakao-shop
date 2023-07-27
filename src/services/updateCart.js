import { authorizationInstance } from "./api";

/**
 * 장바구니 아이디와 수량을 받아서 업데이트 진행
 * @param {object} items : cartId, quantity
 */
export const updateCart = (items) => {
  return authorizationInstance.post("/carts/update", items);
};
