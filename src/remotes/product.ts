import {
  CartsResDto,
  DefaultResDto,
  PayResDto,
  ProductResDto,
  ProductsResDto,
} from "@/dtos/response.dto";
import { https } from "@/functions/axios";
import { isAxiosError } from "axios";

export const getProductDetailById = async (id: number) => {
  const productDetail = await https.get<ProductResDto>(`/products/${id}`);
  // 에러가 발생했을 때
  // 1. 물품이 없는 경우
  if (isAxiosError(productDetail)) {
    if (productDetail.response?.status === 404) {
      window.location.href = "/error/404";
    }
  }
  return productDetail;
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
  // 에러가 발생했을 때
  // 1. 재고가 부족한 경우
  // 2. 물품이 없는 경우
  // 3. 옵션이 없는 경우
  // 4. 로그인이 안된 경우
  const productAddResult = https.post<DefaultResDto>("/carts/add", orders);
  if (isAxiosError(productAddResult)) {
    if (productAddResult.response?.status === 400) {
      window.location.href = "/error/400";
    }
  }
  return productAddResult;
};

export const getCart = () => {
  const cartsResult = https.get<CartsResDto>("/carts");
  // 에러가 발생했을 때
  // 1. 로그인이 안된 경우
  if (isAxiosError(cartsResult)) {
    if (cartsResult.response?.status !== 200) {
      window.location.href = "/error/" + cartsResult.response?.status;
      return null;
    }
  }
  return cartsResult;
};

export interface UpdateCardReq {
  cartId: number;
  quantity: number;
}

export const updateCart = (orders: UpdateCardReq[]) => {
  const cartsResult = https.post<CartsResDto>("/carts/update", orders);
  // 에러가 발생했을 때
  // 1. 재고가 부족한 경우
  // 2. 물품이 없는 경우
  // 3. 옵션이 없는 경우
  // 4. 장바구니가 비어있는 경우
  if (isAxiosError(cartsResult)) {
    if (cartsResult.response?.status !== 200) {
      window.location.href = "/error/" + cartsResult.response?.status;
    }
  }
  return cartsResult;
};
``;
export const payCart = () => {
  const payResult = https.post<PayResDto>("/orders/save");
  // 에러가 발생했을 때
  // 1. 재고가 부족한 경우
  // 2. 장바구니가 비어있는 경우
  // 3. 장바구니에 있는 상품이 없는 경우
  // 4. 장바구니에 있는 상품의 옵션이 없는 경우
  // 5. 잔고가 부족한 경우
  // 6. 결제 정보가 잘못된 경우
  if (isAxiosError(payResult)) {
    if (payResult.response?.status !== 200) {
      window.location.href = "/error/" + payResult.response?.status;
    }
  }
  return payResult;
};
