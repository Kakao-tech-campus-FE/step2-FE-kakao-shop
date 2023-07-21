import { authorizationInstance } from "./api";

/** 장바구니 담기  */
export const addCart = (items) => {
  // {
  //   optionId :1
  //   quantity: 2
  // }
  return authorizationInstance.post("/carts/add", items);
};
