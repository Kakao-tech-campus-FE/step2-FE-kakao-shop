import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문
 * headers: { Authorization: `Bearer ${token}` }
 */
export const order = () => {
  return instance.post("/orders/save");
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`);
}