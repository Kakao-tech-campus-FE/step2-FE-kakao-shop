import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품 주문
 * headers: { Authorization: `Bearer ${token}`}
 */
export const order = (items) => {
  return instance.post("/orders/save", items);
};

/**
 * 최종 결제 완료
 * @param {*} orderId : 주문번호
 * @returns
 */
const getOrderFromIdPath = (orderId) => `/orders/${orderId}`;

export const getOrderFromId = (id) => {
  // 주문번호가 없을 때 에러캐칭
  if (!id) {
    throw Error("주문에 실패했습니다.");
  }
  return instance.get(getOrderFromIdPath(id));
};
