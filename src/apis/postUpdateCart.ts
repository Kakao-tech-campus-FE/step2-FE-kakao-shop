import AxiosInstance from "@utils/Instance";

interface Option {
  cartId: number;
  quantity: number;
}

export const postUpdateCart = async (option: Option[]) => {
  const response = await AxiosInstance.post("/carts/update", option);
  return response;
};
