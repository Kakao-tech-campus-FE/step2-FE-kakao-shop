import instance from "./index";

export const makeOrder = async () => {
  try {
    const response = await instance.post("/orders/save");
    return response;
  } catch (error) {
    throw error;
  }
};
