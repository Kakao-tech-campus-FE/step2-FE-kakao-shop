import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartNum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartNum: (state, action) => {
      state.cartNum = action.payload;
    },
  },
});

export const { updateCartNum } = cartSlice.actions;
export default cartSlice.reducer;
