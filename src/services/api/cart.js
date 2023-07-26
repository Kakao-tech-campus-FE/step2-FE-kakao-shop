import { instance } from "./index" // axios instance import

/**
 * 장바구니 담기
 * @param {object} payload
 * */
export const addCart = (payload) => {
  // payload에 담기는 내용의 형태
  /* 
  {
    optionId: 1,
    quantity: 1,
  } */
  return instance.post("/carts/add", payload)
}

/**
 * 장바구니 조희
 * @param {object} payload
 * */
export const getCart = () => {
  return instance.get("/carts")
}

/**
 * 장바구니 수정 - 아이디와 수량을 받아서 업데이트를 진행
 * @param {object} items: cartId, quantity
 * */
export const updateCart = (items) => {
  return instance.post("/carts/update", items)
}
