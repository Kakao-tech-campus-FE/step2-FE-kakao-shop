import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    delEmail: (state) => {
      state.email = initialState
    }
  },
});

export const {setEmail, delEmail} = userSlice.actions;

export default userSlice.reducer;