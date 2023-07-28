import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
};

const orderSlice = createSlice({
  name: "orderId",
  initialState,
  reducers: {
    saveId: (state, action) => {
      state.id += action.payload;
    },
    seleteId: (state) => {
      state.id = 0;
    },
  },
});

export const { saveId, deleteId } = orderSlice.actions;

export default orderSlice.reducer;
