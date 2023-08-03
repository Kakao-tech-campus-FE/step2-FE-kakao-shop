import { instance } from ".";

/**
 * 장바구니에 있는 모든 상품 주문
 * Bearer token 필요
 */
export const order = () => {
  return instance.post("/orders/save");
};

export const getOrderFromId = (id, token) => {
  instance.defaults.headers.common["Authorization"] = token;
  return instance.get(`/orders/${id}`);
};
