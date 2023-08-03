import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문(주문생성)
 * headers: {Authorization: `Bearer ${token}`}
 */
export const order = () => {
  return instance.post("/orders/save");
};

// 특정 주문 조회
export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`);
};
