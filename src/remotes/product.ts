import {
  CartsResDto,
  DefaultResDto,
  ProductResDto,
  ProductsResDto,
} from "@/dtos/response.dto";
import { authAxios, commonAxios } from "@/functions/axios";

export const getProductDetailById = async (id: number) => {
  return commonAxios.get<ProductResDto>(`/products/${id}`);
};

export const getProducts = async ({
  pageParam = 0,
}: {
  pageParam?: number;
}) => {
  const { data } = await commonAxios.get<ProductsResDto>(
    `/products?page=${pageParam}`
  );

  return {
    result: data.response,
    nextPage: pageParam + 1,
  };
};

export interface ProductOrderReq {
  optionId: number;
  quantity: number;
}

export const addProductToCart = async (orders: ProductOrderReq[]) => {
  return authAxios.post<DefaultResDto>("/carts/add", orders);
};

export const getCart = async () => {
  return authAxios.get<CartsResDto>("/carts");
};

export interface UpdateCardReq {
  cartId: number;
  quantity: number;
}

export const updateCart = async (orders: UpdateCardReq[]) => {
  return authAxios.post<CartsResDto>("/carts/update", orders);
};
