export class Product {
  id: number;
  productName: string;
  description: "";
  image: string;
  price: "";
  constructor(product: Product) {
    this.id = product.id;
    this.productName = product.productName;
    this.description = product.description;
    this.image = product.image;
    this.price = product.price;
  }
}
