import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    isOn: false,
    message: "",
    moveTo: "",
  },
  reducers: {
    toastOnReducer: (state, action) => {
      state.isOn = action.payload.isOn;
      state.message = action.payload.message;
      state.moveTo = action.payload.moveTo;
    },

    toastOffReducer: (state) => {
      state.isOn = false;
      state.message = "";
      state.moveTo = "";
    },
  },
});

export const { toastOnReducer, toastOffReducer } = toastSlice.actions;
export default toastSlice.reducer;
