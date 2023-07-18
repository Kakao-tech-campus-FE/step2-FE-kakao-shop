import { instance } from "./index";

/**
 * 장바구니 담기 
 * @param {object} payload 
 * @returns instance.post("/cart/add")
 */
export const addCart = (payload) => {
  return instance.post("/cart/add")
}