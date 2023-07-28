interface PayedOption {
  id: number;
  optionName: string;
  quantity: number;
  price: number;
}

interface PayedProduct {
  productName: string;
  items: PayedOption[];
}

interface PayResponse {
  success: boolean;
  response: { id: number; products: PayedProduct[]; totalPrice: number };
  error: null;
}

export type { PayedOption, PayedProduct, PayResponse };
