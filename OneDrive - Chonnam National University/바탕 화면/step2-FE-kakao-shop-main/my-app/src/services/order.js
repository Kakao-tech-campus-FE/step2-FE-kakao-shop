import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문
 * headers: { Authorization: `bearer ${token}` }
 */

export const order = (orderData) => {
  return instance.post("/orders/save", orderData);
};

export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`);
};