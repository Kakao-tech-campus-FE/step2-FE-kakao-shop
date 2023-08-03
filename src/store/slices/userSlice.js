import { createSlice } from "@reduxjs/toolkit";

const initialState = { email: null, logInTime: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setLogInTime: (state, action) => {
      state.logInTime = action.payload.logInTime;
    },
  },
});

export const { setEmail, setLogInTime } = userSlice.actions;
export default userSlice.reducer;
