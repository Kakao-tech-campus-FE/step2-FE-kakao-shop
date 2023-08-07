import { getCookie } from "../store/cookies";
import { instance } from "./index";

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
};

export const inCart = () => {
  if (getCookie("token")) return instance.get("/carts");
  return null;
};

/**
 * 장바구니 아이디와 수량을 받아서 업데이트 진행
 * @param {*} payload
 */
export const modifiedCart = (payload) => {
  return instance.post("/carts/update", payload);
};
