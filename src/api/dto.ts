export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export interface ProductOptionData {
  id: number;
  price: string;
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
