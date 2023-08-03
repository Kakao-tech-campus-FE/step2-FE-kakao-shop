import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  expirationTime: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    reducerLogin: (state, action) => {
      state.isLogin = true;
      state.email = action.payload;
    },
    reducerLogout: (state) => {
      state.isLogin = false;
      state.expirationTime = null;
      state.email = "";
      localStorage.removeItem("token");
    },
    setExpirationTime: (state, action) => {
      state.expirationTime = action.payload;
    },
  },
});

export const { reducerLogin, reducerLogout, setExpirationTime } =
  userSlice.actions;
export default userSlice.reducer;
