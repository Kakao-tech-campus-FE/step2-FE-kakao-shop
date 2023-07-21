import AxiosInstance from "@utils/Instance";

export const getCart = async () => {
  const response = await AxiosInstance.get("/carts");
  return response;
};
