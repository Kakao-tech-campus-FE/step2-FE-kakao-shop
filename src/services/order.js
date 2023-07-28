import { authorizationInstance } from "./api";
import { instance } from "./api";

/**
 * 장바구니에 있는 모든 상품을 주문
 */
export const order = (order) => {
  return authorizationInstance.post("/orders/save", order);
};

export const getOrderFromId = (id) => {
  return authorizationInstance.get("/orders/" + id);
};
