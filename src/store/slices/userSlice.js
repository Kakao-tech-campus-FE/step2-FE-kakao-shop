import { createSlice } from "@reduxjs/toolkit";

const initialState = { email: null, token: null, logInTime: null };

const userSlice = createSlice({
  name: "user", // key로써, 겹치면 안됨
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setLogInTime: (state, action) => {
      state.logInTime = action.payload.logInTime;
    },
  },
});

export const { setEmail, setToken, setLogInTime } = userSlice.actions; // reducers 내용물
export default userSlice.reducer; // reducer만 따로 store 줘야 함
