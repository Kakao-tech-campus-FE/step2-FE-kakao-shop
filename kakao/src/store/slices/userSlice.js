import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

const userSlice = createSlice({
  name: "user", //구분자
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },

    clearEmail: (state) => {
      state.email = null;
    },
  },
});

export const { setEmail, clearEmail } = userSlice.actions;
export default userSlice.reducer;
