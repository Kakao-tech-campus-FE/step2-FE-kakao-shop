import { Carts, Pay, Product, ProductDetail } from "@/dtos/product.dto";

export interface responseError {
  message: string;
  status: number;
}

export class DefaultResDto {
  success: boolean;
  response: unknown | null;
  error: responseError | null;

  constructor(data: DefaultResDto) {
    this.success = data.success;
    this.response = data.response;
    this.error = data.error;
  }
}

export class ProductResDto extends DefaultResDto {
  response: ProductDetail;
  constructor(data: ProductResDto) {
    super(data);
    this.response = data.response;
  }
}

export class ProductsResDto extends DefaultResDto {
  response: Product[];
  constructor(data: ProductsResDto) {
    super(data);
    this.response = data.response;
  }
}

export class CartsResDto extends DefaultResDto {
  response: Carts;
  constructor(data: CartsResDto) {
    super(data);
    this.response = data.response;
  }
}

export class PayResDto extends DefaultResDto {
  response: Pay;
  constructor(data: PayResDto) {
    super(data);
    this.response = data.response;
  }
}
