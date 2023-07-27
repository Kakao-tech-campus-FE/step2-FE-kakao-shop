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

interface AddCartResponse {
  success: true;
  response: null;
  error: null;
}

interface ProductCartOption {
  id: number;
  option: {
    id: number;
    optionName: string;
    price: number;
  };
  quantity: number;
  price: number;
}
interface GetCartResponse {
  success: true;
  response: {
    products: [
      {
        id: number;
        productName: string;
        carts: ProductCartOption[];
      }
    ];
    totalPrice: number;
  };
  error: null;
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

export type { ProductListResponse, ProductDetailResponse, Product, ProductDetail, AddCartResponse, GetCartResponse, ProductCartOption };
