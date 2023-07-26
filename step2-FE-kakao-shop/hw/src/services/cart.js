import { instance } from "./index"; // axios instance

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (items) => {
  // items: {
  //   optionId: 1
  //   quantity: 1
  // }
  return instance.post("/carts/add", items);
};

export const getCart = () => {
  return instance.get("/carts");
};

/**
 * 장바구니 아이디와 수량을 받아서 업데이트를 진행
 * @param {object} items: cartId, quantity
 */
export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};

// HTTP Method
// GET: 데이터를 조회할 때 사용 + 보안이 필요가 없어야 함, payload body가 존재X
// POST: 생성, 리턴되는 데이터를 암호화하여 전송
