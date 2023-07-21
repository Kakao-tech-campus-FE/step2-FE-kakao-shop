import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../../services/product";

const initialState = {
    detail: [],
    loading: false,
    error: null,
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDetail.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getDetail.fulfilled, (state, action) => {
            state.detail = action.payload.response; // {success, response, error}
            state.loading = false;
            state.error = null;
        })
        builder.addCase(getDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; //error exist: {message, status}
        });
    }
})

export const getDetail = createAsyncThunk(
    "detail/getDetail",
    async(id, thunkAPI) => {
        try {
            const response = await getProductById(id);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export default detailSlice.reducer;