import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: {message, status}
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
      if (action.payload.response.length < 9) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products = _.uniqBy(
        [...state.products, ...action.payload.response],
        "id"
      ); // 구조 분해 할당
      state.error = action.payload.error;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload.error : null;
    });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page, thunkAPI) => {
    try {
      const response = await fetchProducts(page);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export default productsSlice.reducer;
