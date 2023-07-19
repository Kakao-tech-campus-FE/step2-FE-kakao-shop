export interface productInfo {
  id: number;
  description: string;
  image: string;
  price: number;
  productName: string;
}

export interface OptionInfo {
  id: number;
  optionName: string;
  price: number;
}

export interface DetailProductInfo {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  starCount: number;
  options: OptionInfo[];
}
