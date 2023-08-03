import instance from "./index";

export const addCart = async (options) => {
  try {
    const response = await instance.post("/carts/add", options);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await instance.get("/carts");
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCart = async (options) => {
  try {
    const response = await instance.post("/carts/update", options);
    return response;
  } catch (error) {
    throw error;
  }
};
