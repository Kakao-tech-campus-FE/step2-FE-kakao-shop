import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductSlice";

const initialState = {
    email: null,
    loginTime: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        clearUser: (state) => {
            state.email = null;
            state.expirationTime = null;
            state.isLoggedIn = false;
          },
          setUser: (state, action) => {
            state.user = action.payload.user;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload.response;
            state.error = action.payload.error;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        });
    },
});


export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
