import { ProductDetail, ProductOrder } from "@/dtos/product.dto";

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
  response: ProductDetail | null;
  constructor(data: ProductResDto) {
    super(data);
    this.response = data.response;
  }
}

export class ProductOrderResDto extends DefaultResDto {
  response: ProductOrder | null;
  constructor(data: ProductOrderResDto) {
    super(data);
    this.response = data.response;
  }
}
