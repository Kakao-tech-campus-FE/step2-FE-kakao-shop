import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문
 * headers: { Authorization: `Bearer ${token}` }
 */
export const order = async () => {
  const res = await instance.post("/orders/save");
  return res.data;
};

export const getOrderFromId = async (id) => {
  const res = await instance.get(`/orders/${id}`);
  return res;
};
