import { instance } from "./index";

/**
 * 장바구니 담기 API
 * @param {object} payload { optionId, quantity }
 * @returns
 */
export const addCart = (items) => {
  return instance.post("/carts/add", items);
};

export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};

export const getCart = async () => {
  try {
    const response = await instance.get("/carts");
    // console.log("getCart Api data", response.data.response);
    return response.data;
  } catch (error) {
    // console.log("getCart Api Error", error);
    throw error;
  }
};
