import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { staticUrl } from '../../utils/convert';

const initialState: { email: string | null; expirationDate: Date | null } = {
  email: null,
  expirationDate: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; expirationDate: Date }>) => {
      state.email = action.payload.email;
      state.expirationDate = action.payload.expirationDate;
    },
    logout: (state) => {
      state.email = null;
      state.expirationDate = null;
      localStorage.removeItem('token');

      window.location.href = staticUrl('/login');
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectEmail = (state: RootState) => state.user.email;
export const selectExpirationDate = (state: RootState) => state.user.expirationDate;

export default userSlice.reducer;
