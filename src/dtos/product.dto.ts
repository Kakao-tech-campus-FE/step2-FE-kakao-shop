export class Product {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  constructor(product: Product) {
    this.id = product.id;
    this.productName = product.productName;
    this.description = product.description;
    this.image = product.image;
    this.price = product.price;
  }
}

export interface ProductOption {
  id: number;
  optionName: string;
  price: number;
}

export class ProductDetail extends Product {
  starCount: number;
  options: ProductOption[];
  constructor(product: ProductDetail) {
    super(product);
    this.starCount = product.starCount;
    this.options = product.options;
  }
}

export interface CartItem {
  id: number;
  option: ProductOption;
  quantity: number;
  price: number;
}

export interface ProductOrder {
  id: number;
  productName: string;
  carts: CartItem[];
}

export class Carts {
  products: ProductOrder[];
  totalPrice: number;
  constructor(productOrder: Carts) {
    this.products = productOrder.products;
    this.totalPrice = productOrder.totalPrice;
  }
}

export interface PayOrderItem {
  id: number;
  optionName: string;
  quantity: number;
  price: number;
}

interface PayOrder {
  productName: string;
  items: PayOrderItem[];
}

export class Pay {
  id: number;
  products: PayOrder[];
  totalPrice: number;
  constructor(pay: Pay) {
    this.id = pay.id;
    this.products = pay.products;
    this.totalPrice = pay.totalPrice;
  }
}
