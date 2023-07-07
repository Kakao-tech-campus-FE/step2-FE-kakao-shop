import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const newState = state;
      newState.isLoggedIn = true;
      newState.email = action.payload.email;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
