import instance from "./index";

export const makeOrder = async () => {
  try {
    const response = await instance.post("/orders/save");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (orderId) => {
  console.log("getOrder:orderId:", orderId)
  try {
    const response = await instance.get(`/orders/${orderId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
