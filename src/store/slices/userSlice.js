import { createSlice } from "@reduxjs/toolkit";
import { setExprirationTime } from "../../utils";

const initialState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    LogIn: (state, action) => {
      setExprirationTime();
      state.isLogged = true;
    },
    LogOut: (state, action) => {
      localStorage.clear();
      state.isLogged = false;
      window.location.reload();
    },
  },
});

export const { LogIn, LogOut } = userSlice.actions;
export default userSlice.reducer;
