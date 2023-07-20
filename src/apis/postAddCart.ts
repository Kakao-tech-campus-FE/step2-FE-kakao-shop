import AxiosInstance from "@utils/Instance";

interface Option {
  optionId: number;
  quantity: number;
}

export const postAddCart = async (option: Option[]) => {
  const response = await AxiosInstance.post("/carts/add", option);
  return response;
};
