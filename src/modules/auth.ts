import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import getCookie from '../utils/getCookie';

export interface AuthState {
  isLogin: boolean;
  username: string | null;
}

const userData = getCookie('user');
const initialState: AuthState = userData ? { isLogin: true, username: userData } : { isLogin: false, username: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      document.cookie = `user=${action.payload}; path=/; max-age=86400`;
      state.isLogin = true;
      state.username = action.payload;
    },
    logout: (state) => {
      document.cookie = `user=${state.username}; path=/; max-age=0`;
      state.isLogin = false;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
