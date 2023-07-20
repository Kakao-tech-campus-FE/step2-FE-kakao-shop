import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  username: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    logoutUser: (state) => {
      state.email = null;
      state.username = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice;
