import { createSlice } from "@reduxjs/toolkit";
import { isExpired } from "@/functions/jwt";
import { getAuth } from "@/functions/auth";

interface SignState {
  isSignIn: boolean;
}

const initialState: SignState = {
  isSignIn: !isExpired(getAuth()),
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    setSignIn: (state) => {
      state.isSignIn = true;
    },
    setSignOut: (state) => {
      state.isSignIn = false;
    },
  },
});

export const { setSignIn, setSignOut } = signSlice.actions;

export default signSlice.reducer;
