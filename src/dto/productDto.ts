export interface productInfo {
  id: number;
  description: string;
  image: string;
  price: number;
  productName: string;
}

export interface OptionInfo {
  id: number;
  optionName: string;
  price: number;
}

export interface DetailProductInfo {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  starCount: number;
  options: OptionInfo[];
}

export interface CartInfo {
  id: number;
  option: OptionInfo;
  quantity: number;
  price: number;
}

export interface CartProductInfo {
  id: number;
  productName: string;
  carts: CartInfo[];
}

export interface Cart {
  products: CartProductInfo[];
  totalPrice: number;
}

export interface AddCart {
  optionId: number;
  quantity: number;
}

export interface UpdateCart {
  cartId: number;
  quantity: number;
}

export interface CompleteProduct {
  productName: string;
  items: ({ quantity: number } & OptionInfo)[];
}

export interface CompleteOrder {
  id: number;
  products: CompleteProduct[];
  totalPrice: number;
}
