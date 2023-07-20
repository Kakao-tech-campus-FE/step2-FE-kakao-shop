import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit';
import { getProductById } from '../../services/product';

const initialState = {
  detail: null,
  loading: false,
  error: null, // error exist: { message, status }
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.detail = action.payload.response;
      state.error = null;
    });
    builder.addCase(getDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  }
});

export const getDetail = createAsyncThunk(
  'detail/getDetail',
  async (id, thunkAPI) => {
    try {
      const response = await getProductById(id);
      return response.data; // action.payload에 들어감
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default detailSlice.reducer;