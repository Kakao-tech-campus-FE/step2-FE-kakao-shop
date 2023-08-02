import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const id = action.payload;
      if (!state.cart.includes(id)) {
        state.cart.push(id);
        state.cartCount += 1;
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex((item) => item === id);
      if (index >= 0) {
        state.cart.splice(index, 1);
        state.cartCount -= 1;
      }
    },
    initializeCart: (state) => {
      state.cart = [];
      state.cartCount = 0;
    },
  },
});

export const { addProduct, removeProduct, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;
