import { createSlice } from '@reduxjs/toolkit';

interface UserSliceState {
  isLogin: boolean;
  email: null | string;
}

const initialState: UserSliceState = {
  isLogin: false,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLogin = false;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
