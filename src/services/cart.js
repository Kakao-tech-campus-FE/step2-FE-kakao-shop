import instance from "./api";

/**
 * 장바구니 담기
 * @param payload
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const addCart = (payload) => {
  return instance.post("/carts/add", payload);
};

export const getCart = () => {
  return instance.get("/carts");
};

export const updateCart = (payload) => {
  return instance.post("/carts/update", payload);
};
