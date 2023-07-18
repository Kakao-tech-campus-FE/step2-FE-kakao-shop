import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProductById } from "../../Servicies/product"
import { reduce } from "lodash"
import { getProducts } from "./productSlice"

const initialState = {
  detail: null,
  loading: false,
  error: null,
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.detail = action.payload.response;
        state.loading = false;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export const getDetail = createAsyncThunk(
  "detail/getDetali",
  async (id, thunkAPI) => { // thunkAPI: 고정. 여러 api들에 대한 method 담김.
    try {
      const response = await getProductById(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
)

export default detailSlice.reducer;