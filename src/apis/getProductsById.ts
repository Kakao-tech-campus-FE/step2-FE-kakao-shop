import AxiosInstance from "@utils/Instance";

export const getProductsById = async (id?: string) => {
  const response = await AxiosInstance.get(`/products/${id}`);

  return response.data;
};
