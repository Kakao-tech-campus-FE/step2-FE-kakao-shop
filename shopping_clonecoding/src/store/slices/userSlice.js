import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  email : null,
  isLoggedIn : false,
};

const userSlice = createSlice({
  name : "user",
  initialState,
  reducers : {
    setUser: (state, action) =>{
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser : (state) =>{
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});
export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;