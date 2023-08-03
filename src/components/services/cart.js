import { instance } from "."

const apiUrl = process.env.REACT_APP_API_URL;
/**
 * 장바구니 담기
 * @param {object} payload 
 */
export const addCart = (payload) => {
  return instance.post(apiUrl + "/carts/add", payload);
  
};

export const getCart = (payload) => {
  return instance.get(apiUrl + "/carts", payload);
};

export const updateCart = (items) => {
  return instance.post(apiUrl + "/carts/update", items);
};