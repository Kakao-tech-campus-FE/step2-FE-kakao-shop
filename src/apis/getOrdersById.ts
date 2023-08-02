import AxiosInstance from "@utils/Instance";

export const getOrdersById = async (id?: string) => {
  const response = await AxiosInstance.get(`/orders/${id}`);

  return response.data;
};
