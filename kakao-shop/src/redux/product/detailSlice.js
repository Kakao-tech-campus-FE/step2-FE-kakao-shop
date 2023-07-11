import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";

const initialState = {
    detail: null,
    loading: false,
    error: null
}

const detailSlice = createSlice({
    name: "detail",
    initialState,
    // thunk을 쓸 때는 extra 사용
    extraReducers: (builder) => {
        builder.addCase(getDetail.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }
        ).addCase(getDetail.fulfilled, (state, action) => {
            state.products = action.payload.response;
            state.loading = false;
            state.error = null;
        }
        ).addCase(getDetail.rejected, (state, action) => {
            state.loading = false;
        }
        )
    }
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


export default productsSlice.reducer;