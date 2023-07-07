import { createSlice } from "@reduxjs/toolkit";

const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`
    )
  );
  if (matches) {
    return decodeURIComponent(matches[1]);
  }
  return undefined;
};

const userData = getCookie("user");
const initialState = userData
  ? { isLogin: true, token: userData }
  : { isLogin: false, token: null };

/* eslint-disable no-param-reassign */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      document.cookie = `user=${action.payload}; path=/; max-age=1800`; // 30-minutes
      state.isLogin = true;
      state.token = action.payload;
    },
    logout: (state) => {
      document.cookie = `user=${state.token}; path=/; max-age=0`;
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
