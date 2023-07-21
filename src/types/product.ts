export interface ProductThumbnail {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductOption {
  id: number;
  optionName: string;
  price: number;
}

export interface ProductDetail extends ProductThumbnail {
  starCount: number;
  options: ProductOption[];
}

export interface SelectedOption {
  id: number;
  optionName: string;
  quantity: number;
  individualPrice: number;
}

export interface AddCartOption {
  optionId: number;
  quantity: number;
}

export interface CartProduct {
  id: number;
  productName: number;
  carts: {
    id: number;
    option: ProductOption;
    quantity: number;
    price: number;
  }[];
}

export interface CartData {
  products: CartProduct[];
  totalPrice: number;
}
