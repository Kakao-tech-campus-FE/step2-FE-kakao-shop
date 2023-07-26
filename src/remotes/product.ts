import {
  CartsResDto,
  DefaultResDto,
  PayResDto,
  ProductResDto,
  ProductsResDto,
} from "@/dtos/response.dto";
import { https } from "@/functions/axios";

export const getProductDetailById = async (id: number) => {
  return https.get<ProductResDto>(`/products/${id}`);
};

export const getProducts = async ({
  pageParam = 0,
}: {
  pageParam?: number;
}) => {
  const { data } = await https.get<ProductsResDto>(
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
  return https.post<DefaultResDto>("/carts/add", orders);
};

export const getCart = () => {
  return https.get<CartsResDto>("/carts");
};

export interface UpdateCardReq {
  cartId: number;
  quantity: number;
}

export const updateCart = (orders: UpdateCardReq[]) => {
  return https.post<CartsResDto>("/carts/update", orders);
};

export const payCart = () => {
  return https.post<PayResDto>("/orders/save");
};
