import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../Servicies/product";
import _ from "lodash"; // lodash import convention

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: { message, status }
  isEnd: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false; // { success, response, error }
      state.products = _.uniqBy([...state.products, ...action.payload.response], "id");
      state.error = action.error;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const getProducts = createAsyncThunk("products/getProducts", async (page) => {
  const response = await fetchProducts(page);
  return response.data;
});

export default productsSlice.reducer;
