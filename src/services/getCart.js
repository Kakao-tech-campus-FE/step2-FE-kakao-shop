import { authorizationInstance } from "./api";

/** 장바구니 담기  */
export const getCart = () => {
  return authorizationInstance.post("/carts");
};
