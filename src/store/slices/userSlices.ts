import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: { email: string | null } = {
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
  },
});

export const { setEmail } = userSlice.actions;

export const selectEmail = (state: RootState) => state.user.email;

export default userSlice.reducer;
