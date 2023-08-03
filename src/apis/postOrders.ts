import AxiosInstance from "@utils/Instance";

export const postOrders = async () => {
  const response = await AxiosInstance.post("/orders/save");
  return response;
};
