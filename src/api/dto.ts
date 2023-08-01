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

export interface CartedOptionData {
  id: number; // 옵션 id
  option: ProductOptionData; // 선택된 옵션
  quantity: number; // 수량
  price: number; // 해당 옵션 총합 가격
}

/**
 * 장바구니 상품 조회
 */
export interface CartProductData {
  id: number; // 상품 id
  productName: string;
  carts: CartedOptionData[]; // 카트에 담긴 옵션 정보
}

export interface CartProductsQuery {
  success: boolean;
  response: {
    products: CartProductData[];
    totalPrice: number;
  };
  error: null;
}

/**
 * 장바구니 상품 수정
 */
export interface CartProductEditData {
  cartId: number; // 상품 id
  optionId: number; // 옵션 id
  optionName: string; // 옵션 이름
  quantity: number; // 수량
  price: number; // 가격
}

export interface CartProductEdit {
  success: boolean;
  response: {
    carts: CartProductEditData[];
    totalPrice: number;
  };
  error: null;
}

export interface AddCartedItem {
  optionId: number;
  quantity: number;
}

export interface EditCartedItem {
  cartId: number;
  quantity: number;
}

/**
 * 주문 API
 */

export interface OrderedOptionData {
  id: number; // 옵션 id
  optionName: string; // 선택된 옵션
  quantity: number; // 수량
  price: number; // 해당 옵션 총합 가격
}

export interface OrderedProductData {
  productName: string;
  items: OrderedOptionData[];
}

export interface OrderData {
  id: number;
  products: OrderedProductData[];
  totalPrice: number;
}

export interface OrderResult {
  success: boolean;
  response: OrderData;
  error: null;
}
