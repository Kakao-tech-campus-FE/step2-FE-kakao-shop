import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    token: "",
    loginTime: 0,
    islogin: false,
  },
  reducers: {
    setUserReducer: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.loginTime = action.payload.loginTime;
      state.islogin = action.payload.islogin;
    },

    clearUserReducer: (state) => {
      state.email = "";
      state.token = "";
      state.loginTime = 0;
      state.islogin = false;
    },
  },
});

export const { setUserReducer, clearUserReducer } = loginSlice.actions;
export default loginSlice.reducer;
