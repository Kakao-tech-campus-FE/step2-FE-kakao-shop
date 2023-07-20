import { CartResDto, DefaultResDto, ProductResDto } from "@/dtos/response.dto";
import { authAxios, commonAxios } from "@/functions/axios";

export const getProductDetailById = async (id: number) => {
  return commonAxios.get<ProductResDto>(`/products/${id}`);
};

export const getProducts = async (pageData: { pageParam?: number }) => {
  const pageParam = pageData?.pageParam ?? 0;
  const { data } = await commonAxios.get<ProductResDto>(
    `/products?page=${pageParam}`
  );

  return {
    result: data.response,
    nextPage: pageParam + 1,
  };
};

interface ProductOrder {
  optionId: number;
  quantity: number;
}

export const addProductToCart = async (orders: ProductOrder[]) => {
  return authAxios.post<DefaultResDto>("/carts/add", orders);
};

export const getCart = async () => {
  return authAxios.get<CartResDto>("/carts");
};
