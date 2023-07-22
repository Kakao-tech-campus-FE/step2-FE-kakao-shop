// Product
export type Product = {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
};

export type ProductDetail = Product & {
  starCount: number;
  options: Option[];
};

export type CartProduct = Pick<Product, 'id' | 'productName'> & { carts: Cart[] };

// Cart
export type Cart = {
  id: number;
  option: Option;
  quantity: number;
  price: number;
};

export type Totals = Pick<Cart, 'quantity' | 'price'>;

// Option
export type Option = {
  id: number;
  optionName: string;
  price: number;
};

export type UserSelectOption = Option & {
  isSelected: boolean;
  quantity: number;
};
