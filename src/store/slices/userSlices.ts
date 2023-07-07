import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: { email: string | null; expirationDate: Date | null } = {
  email: null,
  expirationDate: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<{ email: string | null }>) => {
      state.email = action.payload.email;
    },
    setExpirationDate: (state, action: PayloadAction<{ expirationDate: Date | null }>) => {
      state.expirationDate = action.payload.expirationDate;
    },
  },
});

export const { setEmail, setExpirationDate } = userSlice.actions;

export const selectEmail = (state: RootState) => state.user.email;
export const selectExpirationDate = (state: RootState) => state.user.expirationDate;

export default userSlice.reducer;
