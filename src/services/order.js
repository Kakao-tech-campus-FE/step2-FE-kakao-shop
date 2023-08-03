import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문
 * headers: { Authorization: `bearer ${token}` }
 */


export const order = (payload) => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  console.log(bearerToken)
  return instance.post(`/orders/save`, payload, {
  
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
};

export const getOrderFromId = (id) => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  return instance.get(`/orders/${id}`, {
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
};