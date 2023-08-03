import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartSumPrice: 0,
    orderId: null,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.optionId === action.payload.optionId);
      if (!!existingItem) {
        existingItem.quantity += 1;
      } else {       
        state.cartItems.push(action.payload);
      }
    },
    subtractItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.optionId === action.payload.optionId);
      existingItem.quantity -= 1;
    },
    updateSumPrice: (state, action) => {
      state.cartSumPrice += action.payload;
    },
    clearItem: (state) => {
      state.cartItems = [];
      state.cartSumPrice = 0;
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    }
  },
});

export const { addItem, subtractItem, clearItem, setOrderId, updateSumPrice } = cartSlice.actions;
export default cartSlice.reducer;