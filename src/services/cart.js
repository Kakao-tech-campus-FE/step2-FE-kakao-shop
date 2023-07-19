import { getCookie } from "../store/cookies";
import { instance } from "./index";

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  const token = getCookie("token");
  if (token) instance.defaults.headers.common["Authorization"] = token;
  return instance.post("/carts/add", payload);
};

export const inCart = () => {
  const token = getCookie("token");
  if (token) instance.defaults.headers.common["Authorization"] = token;
  return instance.get("/carts");
};

export const modifiedCart = (payload) => {
  const token = getCookie("token");
  if (token) instance.defaults.headers.common["Authorization"] = token;
  return instance.post("/carts/update", payload);
};
