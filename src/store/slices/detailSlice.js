import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductById } from '../../components/services/product';

const initialState = {
    detail: [],
    loading: false, // { success, response [] , error }
    error: null,    // { message, status }
}

const detailSlice = createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDetail.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getDetail.fulfilled, (state, action) => {
            state.detail = action.payload.response;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
    },
})

// redux-thunk를 이용한 비동기 처리
// 1번째 파라미터 : Unique한 Key값
// 2번째 파라미터 : 비동기 콜백 함수
export const getDetail = createAsyncThunk(
    "detail/getDetail",
    async (id, thunkAPI) => {
        try {
            const response = await getProductById(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.value);
        }
    }
)

// reducer 자체도 export 해주어야 한다!
export default detailSlice.reducer;