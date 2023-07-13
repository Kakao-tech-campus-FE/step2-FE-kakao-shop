import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, getProductById } from "../services/product";
import _ from "lodash";

const initialState = {
    detail: null,
    loading: false,
    error: null, // error exist: { message, status }
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetail.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }); //pending
        builder.addCase(getDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.detail = action.payload.detail;
            state.error = action.payload.error;
        }); // resolve
        builder.addCase(getDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        }); // reject
    },
});

export const getDetail = createAsyncThunk(
    "detail/getDetail",
    async (id, thunkAPI) => {
        try {
            const response = await getProductById(id);
            return response.data; // action.payload
        } catch (e) {
            return thunkAPI.data;
        }
    }
);

export default detailSlice.reducer;
