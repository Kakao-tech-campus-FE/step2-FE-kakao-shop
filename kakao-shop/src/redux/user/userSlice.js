import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user", // 구분자
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    }, // payload는 파라미터에 담겨오는 값
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { setEmail, setToken } = userSlice.actions;
export default userSlice.reducer;
