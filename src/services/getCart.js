import { authorizationInstance } from "./api";

/** 장바구니 조회
 * 장바구니에 담은 물건을 조회 -> GET요청 !!
 */
export const getCart = () => {
  return authorizationInstance.get("/carts");
};
