import { instance } from "./index" // axios instance import

/**
 * 장바구니 담기
 * @param {object} payload
 * */
const addCart = (payload) => {
  // payload에 담기는 내용의 형태
  /* 
  {
    optionId: 1,
    quantity: 1,
  } */
  return instance.post("/carts/add", payload)
}
export default addCart;