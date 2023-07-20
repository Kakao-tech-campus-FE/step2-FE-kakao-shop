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
  optionId: number;
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

export class ProductOptionWithQuantity implements ProductOption {
  optionId: number;
  optionName: string;
  price: number;
  quantity: number;
  constructor(productOption: Omit<ProductOptionWithQuantity, "quantity">) {
    this.optionId = productOption.optionId;
    this.optionName = productOption.optionName;
    this.price = productOption.price;
    this.quantity = 1;
  }
}

interface ProductOrderProducts {
  id: number;
  productName: string;
  carts: [
    {
      id: number;
      option: {
        id: number;
        optionName: string;
        price: number;
      };
      quantity: number;
      price: number;
    }
  ];
}

export class ProductOrder {
  products: ProductOrderProducts[];
  totalPrice: number;
  constructor(productOrder: ProductOrder) {
    this.products = productOrder.products;
    this.totalPrice = productOrder.totalPrice;
  }
}
