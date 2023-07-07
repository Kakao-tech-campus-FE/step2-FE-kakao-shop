import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const userSlice = createSlice({
  // 구분자 unique해야됨
  name: "login",
  initialState,
  reducers: {
    LogIn: (state, action) => {
      state.isLogged = true;
    },
    LogOut: (state, action) => {
      state.isLogged = false;
    },
  },
});

export const { LogIn, LogOut } = userSlice.actions;
export default userSlice.reducer;
