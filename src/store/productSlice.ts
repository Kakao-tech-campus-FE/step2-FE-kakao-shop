import {
  ProductDetail,
  ProductOption,
  ProductOptionWithCount,
} from "@/dtos/product.dto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getProductDetail } from "@/store/productAction";

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  success: boolean;
  data: ProductDetail | null;
  order: ProductOptionWithCount[];
}

const initialState: ProductDetailState = {
  loading: false,
  error: null,
  success: false,
  data: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.order = [];
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.data = action.payload.response;
        state.order = [];
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "";
        state.order = [];
      });
  },
});

export const {
  addProductOrder,
  removeProductOrder,
  updateProductOrder,
  clearProductOrder,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
