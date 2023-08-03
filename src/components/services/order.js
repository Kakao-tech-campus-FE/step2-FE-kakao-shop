import {instance} from "./index";

const apiUrl = process.env.REACT_APP_API_URL;
/**
 * 장바구니에 있는 모든 상품을 주문
 * headers: {Authorization: `Bearer ${token}`}
 * @returns 
 */
export const order = () => {
  return instance.post(apiUrl + "/orders/save");
};

export const getOrderFromId = (id) => {
  return instance.get(apiUrl + `/orders/${id}`);
};