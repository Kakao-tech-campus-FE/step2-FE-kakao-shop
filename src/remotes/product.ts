import { ProductResDto } from "@/dtos/response.dto";
import { commonAxios } from "@/functions/axios";

export const getProductDetailById = async (id: number) => {
  return commonAxios.get<ProductResDto>(`/products/${id}`);
};
