import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStore: (state, action) => {
      const newState = state;
      newState.isLoggedIn = action.payload.isLoggedIn;
      newState.email = action.payload.email;
    },
  },
});

export const { loginStore } = userSlice.actions;

export default userSlice.reducer;
