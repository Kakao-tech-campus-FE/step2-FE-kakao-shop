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