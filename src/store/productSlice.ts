import { ProductOption, ProductOptionWithCount } from "@/dtos/product.dto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  success: boolean;
  order: ProductOptionWithCount[];
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
          (productOption) => productOption.id === action.payload.id
        )
      ) {
        return;
      }
      const newOrder = new ProductOptionWithCount(action.payload);
      state.order.push(newOrder);
    },
    removeProductOrder: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter(
        (productOption) => productOption.id !== action.payload
      );
    },
    updateProductOrder: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const { id, count } = action.payload;
      state.order = state.order.map((productOption) => {
        if (productOption.id === id) {
          productOption.count = count;
        }
        return productOption;
      });
    },
    clearProductOrder: (state) => {
      state.order = [];
    },
  },
});

export const {
  addProductOrder,
  removeProductOrder,
  updateProductOrder,
  clearProductOrder,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
