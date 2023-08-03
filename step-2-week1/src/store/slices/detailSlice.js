import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "../../services/product";
import thunk from "redux-thunk";

const initialState = {
  detail : null,
  loading: false,
  error: null,
}

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDetail.pending, (state, action)=> {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail = action.payload.response; // success, error, response
        state.loading = false;
        state.error = null;
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  async (id, thunkAPI) => {
    try {
      const response = await getProductById(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export default detailSlice.reducer;