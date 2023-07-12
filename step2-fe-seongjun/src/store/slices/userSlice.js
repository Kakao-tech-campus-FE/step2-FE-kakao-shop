import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  email: localStorage.getItem('email') || null,
  loginTime: null,
  isLoggedIn : null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail : (state, action) => {
      state.email = action.payload.email;
      localStorage.setItem('email', state.email);
      state.loginTime = new Date().getTime();
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', state.isLoggedIn);
    },
    logout: (state) => {
      state.email = null;
      localStorage.removeItem("isLoggedIn");
      state.isLoggedIn = false;
      localStorage.removeItem("email");
    },
    loginTime: (state) => {
      state.loginTime = new Date().getTime();
      localStorage.setItem("loginTime", state.loginTime.toString());
    }

  }
});

export const { setEmail, logout, loginTime } = userSlice.actions;

export default userSlice.reducer;