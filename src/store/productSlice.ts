import { ProductOption, ProductOptionWithQuantity } from "@/dtos/product.dto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  success: boolean;
  order: ProductOptionWithQuantity[];
}

const initialState: ProductDetailState = {
  loading: false,
  error: null,
  success: false,
  order: [],
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    addProductOrder: (state, action: PayloadAction<ProductOption>) => {
      if (
        state.order.find(
          (productOption) => productOption.optionId === action.payload.optionId
        )
      ) {
        return;
      }
      const newOrder = new ProductOptionWithQuantity(action.payload);
      state.order.push(newOrder);
    },
    removeProductOrder: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter(
        (productOption) => productOption.optionId !== action.payload
      );
    },
    updateProductOrder: (
      state,
      action: PayloadAction<{ optionId: number; quantity: number }>
    ) => {
      const { optionId, quantity } = action.payload;
      state.order = state.order.map((productOption) => {
        if (productOption.optionId === optionId) {
          productOption.quantity = quantity;
        }
        return productOption;
      });
    },
    clearProductOrder: (state) => {
      state.order = [];
    },
    initProductOrder: (
      state,
      action: PayloadAction<ProductOptionWithQuantity[]>
    ) => {
      state.order = action.payload.map((productOption) => {
        const order = new ProductOptionWithQuantity(productOption);
        order.quantity = productOption.quantity;
        return order;
      });
    },
  },
});

export const {
  initProductOrder,
  addProductOrder,
  removeProductOrder,
  updateProductOrder,
  clearProductOrder,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
