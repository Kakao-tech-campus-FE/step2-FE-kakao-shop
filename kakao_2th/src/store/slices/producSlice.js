import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
}

const porductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export const { getProducts, getProductSucess, getProductsFailed } =
    porductsSlice.actions;

export default porductsSlice.reducer