import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../../services/product";


const initialState = {
    detail: null,
    loading: false,
    error: null,
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDetail.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDetail.fulfilled, (state, action) => {
                state.detail = action.payload.response; // success, response:[], error 세 개가 payload에 저장됨. 여기서 error만
                state.loading = false;
                state.error = null;
            })
            //Promise.rejected()
            .addCase(getDetail.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload.error; // error exist: {message, status}

            })
    }
})

export const getDetail = createAsyncThunk(
    "detail/getDetail",
    async ( id, thunkAPI) => { //첫 번째 인자는 파라미터, 두 번째 인자는 thunkAPI로 고정. API에 대한 메소드들이 담겨 있음
        try {
            const response = await getProductById(id);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export default detailSlice.reducer;