import { instance } from "./index";

export const addCart = (payload) => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  return instance.post("/carts/add", payload, {
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
};

export const getCart = () => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  if(!bearerToken) {
    return Promise.reject("사용자 정보가 없습니다.");
    alert("정보 없음");
  }
  console.log(bearerToken);
  return instance.get("/carts", {
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
};

/**
 * 장바구니 아이디와 수량을 받아서 업데이트를 진행
 * @param {object} items: cartId, quantity
 */
export const updateCart = (items) => {
  const bearerToken = JSON.parse(localStorage.getItem("user")).value;
  return instance.post("carts/update", items, {
    headers: {
      Authorization: `${bearerToken}`,
    },
  })
};