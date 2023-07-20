import { cartsInstance } from "./index";

/**
 * 장바구니 담기 
 * @param {object} payload 
 * @returns instance.post("/cart/add")
 */
export const addCart = (payload) => {
  return cartsInstance.post("/carts/add", payload)
}
export const getCart = () => {
  return cartsInstance.get("/carts")
}
export const updateCart = (items) => {
  return cartsInstance.get("/carts/update", items)
}
