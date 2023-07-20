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
 * 장바구니 수정
 * @param {object} payload
 * */
export const updateCart = (payload) => {
  return instance.post("/carts/update", payload)
}
