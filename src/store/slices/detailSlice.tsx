import { getProductById } from '@api/productApi';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  detail: null,
  loading: false,
  error: null, // error exist: {message, status}
};

const getDetail = createAsyncThunk('detail/getDetail', async (id: number, thunkAPI) => {
  try {
    const response = await getProductById(id);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state, action) => {
      const newState = state;
      newState.loading = true;
      newState.error = null;
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.detail = action.payload.response;
      newState.error = null;
    });
    builder.addCase(getDetail.rejected, (state, action: PayloadAction<any>) => {
      const newState = state;
      newState.loading = false;
      newState.error = action.payload.error;
    });
  },
});

export { getDetail };
export default detailSlice.reducer; // extraReducers가 대신 담아진다.
