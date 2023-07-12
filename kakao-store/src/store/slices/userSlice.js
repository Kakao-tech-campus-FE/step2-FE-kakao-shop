import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: null,
  password: null,
  isLoggedIn: false,
  timeoutId: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmailandPassword: (state, action) => { // setter에 해당하는 부분
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;
    },
    setTimeoutId: (state, action) => {
      state.timeoutId = action.payload;
    },
    clearTimeoutId: (state) => {
      state.timeoutId = null;
    },
  }
});

export const { setEmailandPassword, logout, setTimeoutId, clearTimeoutId } = userSlice.actions;

export default userSlice.reducer;