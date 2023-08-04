import { instance } from "./index";

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = (payload) => {
  // token 부분은 배열 속 token을 가져오기 위해 임의로 정한 부분이라서 리펙토링 필요
  instance.defaults.headers.common["Authorization"] = `${payload[0].token}`;
  const filteredPayload = payload
    .filter((el) => el.optionId !== 0)
    .map(({ token, ...rest }) => rest);

  return instance.post("/carts/add", filteredPayload);
};

/**
 * 장바구니 정보 가져오기
 * @param {String} token
 */
export const getCart = () => {
  return instance.get("/carts");
};

/**
 * 장바구니 업데이트
 * @param {Array} items
 */
export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};
