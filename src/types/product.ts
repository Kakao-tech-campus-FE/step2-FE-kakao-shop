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

export interface UpdateCartOption {
  cartId: number;
  quantity: number;
}

export interface CartItem {
  id: number;
  productName: string;
  carts: {
    id: number;
    option: ProductOption;
    quantity: number;
    price: number;
  }[];
}

export interface CartData {
  products: CartItem[];
  totalPrice: number;
}

export interface OrderItem {
  productName: string;
  items: {
    id: number;
    optionName: string;
    quantity: number;
    price: number;
  }[];
}

export interface OrderData {
  id: number;
  products: OrderItem[];
  totalPrice: number;
}
