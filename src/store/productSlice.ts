import { ProductDetail } from "@/dtos/product.dto";
import { createSlice } from "@reduxjs/toolkit";
import { getProductDetail } from "@/store/productAction";

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  success: boolean;
  data: ProductDetail | null;
}

const initialState: ProductDetailState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.data = action.payload.response;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "";
      });
  },
});

export default productDetailSlice.reducer;
