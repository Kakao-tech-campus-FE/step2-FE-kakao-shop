import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProductById } from "../../services/api/product"

const initialState = {
  detail: null,
  loading: false,
  error: null,
}

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.loading = false;
      /* getDetail의 리턴이 response.data이므로
      action.payload의 값은 {success: , error: , response: } 일 것이다.
      그러므로 state.detail에 action.payload.response를 할당 */
      state.detail = action.payload.response;
      state.error = null;
    });
    builder.addCase(getDetail.rejected, (state, action) => {
      state.loading = false;
      state.loading = action.payload.error;
    });
  }
})

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  //createAsyncThunk에서 2번째 파라미터는 thunkAPI 고정, 
  // 그래서 지정해 주지 않아도 알아서 지정됨, 
  // 하지만 rejectWithValue 처럼 메소드를 이용하는 등 사용하고 싶다면 지정하여 이용 가능
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