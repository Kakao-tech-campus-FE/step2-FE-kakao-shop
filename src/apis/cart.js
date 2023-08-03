import { toast } from "react-toastify";
import { instance } from "./index";
import "react-toastify/dist/ReactToastify.css";

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  return instance
    .post("/carts/add", payload)
    .then((response) => {
      if (response) {
        toast.success("장바구니에 담겼습니다.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
        return {
          products: payload,
        };
      } else {
        // 장바구니 담기 실패 에러 처리
        toast.error("로그인이 필요한 서비스입니다.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

/**
 * 장바구니 조회
 * @param {*} payload
 */
export const getCart = (payload) => {
  return instance.get("/carts", payload);
};

/**
 * 장바구니 수정
 * @param {*} payload
 */
export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};
