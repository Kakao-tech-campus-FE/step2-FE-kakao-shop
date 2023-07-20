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

export class ProductOptionWithCount implements ProductOption {
  id: number;
  optionName: string;
  price: number;
  count: number;
  constructor(productOption: Omit<ProductOptionWithCount, "count">) {
    this.id = productOption.id;
    this.optionName = productOption.optionName;
    this.price = productOption.price;
    this.count = 1;
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
