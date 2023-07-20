import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  password: null,
  isLoggedIn: false,
  timeoutId: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmailandPassword: (state, action) => {
      // setter에 해당하는 부분
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    setTimeoutId: (state, action) => {
      state.timeoutId = action.payload;
    },
    clearTimeoutId: (state) => {
      state.timeoutId = null;
    },
  },
});

export const { setEmailandPassword, setToken, logout, setTimeoutId, clearTimeoutId } = userSlice.actions;

export default userSlice.reducer;
