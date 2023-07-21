import { instance } from "."
import {toast} from "react-toastify";

/**
 * 장바구니 담기
 * @param {object} payload 
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload).then ((response) => {
    if (response) {
      toast.success("장바구니에 상품이 정상적으로 담겼습니다.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return {
        products: payload,
      }
    }
  })
  
};

export const getCart = () => {
  return instance.get("/carts");
};

export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};