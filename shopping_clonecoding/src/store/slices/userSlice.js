import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  email : null,
  isLoggedIn : false,
  expirationTime : null,
};

const userSlice = createSlice({
  name : "user",
  initialState,
  reducers : {
    setUser: (state, action) =>{
      state.email = action.payload.email;
      state.expirationTime = action.payload.expirationTime;
      state.isLoggedIn = true;
    },
    clearUser : (state) =>{
      state.email = null;
      state.expirationTime = null;
      state.isLoggedIn = false;
    },
  },
});
export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;