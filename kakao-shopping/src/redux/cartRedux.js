import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
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
    clearItem: (state) => {
      state.cartItems = [];
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    }
  },
});

export const { addItem, subtractItem, clearItem, setOrderId } = cartSlice.actions;
export default cartSlice.reducer;