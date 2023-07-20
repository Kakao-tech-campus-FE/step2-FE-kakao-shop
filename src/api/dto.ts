/**
 * 로그인 페이지
 */

export interface LoginData {
  email: string;
  password: string;
}

/**
 * 회원가입 페이지
 */

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

/**
 * 상품 상세 페이지
 */

export interface ProductOptionData {
  id: number;
  price: number;
  optionName: string;
}

export interface ProductInfoData {
  id: number;
  options: ProductOptionData[];
  productName: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductData {
  success: boolean;
  response: ProductInfoData[];
  error: string;
}

/**
 * 장바구니 페이지
 */

export interface CartData {
  optionId: number;
  quantity: number;
}
