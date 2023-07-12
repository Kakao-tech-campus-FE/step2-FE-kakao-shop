interface Error {
  message: string;
  status: number;
}

interface Product {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
}

interface ProductDetail extends Product {
  starCount: number;
  options: {
    id: number;
    optionName: string;
    price: number;
  }[];
}

interface ProductListResponse {
  success: boolean;
  response: Product[];
  error: null | Error;
}

interface ProductDetailResponse {
  success: boolean;
  response: ProductDetail;
  error: null | Error;
}

export type { ProductListResponse, ProductDetailResponse, Product };
