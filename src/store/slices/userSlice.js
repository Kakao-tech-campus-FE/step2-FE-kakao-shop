import { createSlice } from "@reduxjs/toolkit";

const initialState = { email: null, expire: null };

const userSlice = createSlice({
  name: "user", // key로써, 겹치면 안됨
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setExpire: (state, action) => {
      state.expire = action.payload.expire;
    },
  },
});

export const { setEmail, setExpire } = userSlice.actions; // reducers 내용물
export default userSlice.reducer; // reducer만 따로 store 줘야 함
