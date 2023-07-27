import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      const now = new Date();
      const ttl = 3600 * 1000;
      state.expiry = now.getTime() + ttl;
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("expiry", state.expiry);
    },
    logoutUser: (state) => {
      state.email = null;
      state.expiry = null;
      localStorage.removeItem("email");
      localStorage.removeItem("expiry");
      localStorage.removeItem("access_token");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice;
