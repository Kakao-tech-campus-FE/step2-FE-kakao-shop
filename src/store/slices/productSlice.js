import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: {message, status}
  isEnd: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  // 썽크를 사용할 때
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    // Promise.resolve()
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload.response.length === 0) {
        state.isEnd = true;
        state.loading = false;
        return;
      }
      state.products = _.unionBy(
        [...state.products, ...action.payload.response],
        "id"
      );
      state.loading = false;
      state.error = action.payload.error;
    });
    // Promise.reject()
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = await fetchProducts(page);
    return response.data;

    // action.payload
    // success, response : [], error
  }
);

export default productSlice.reducer;
