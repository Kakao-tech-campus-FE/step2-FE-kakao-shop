import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface SignState {
  isLogin: boolean;
  email: string;
  name: string;
  password: string;
}

const initialState: SignState = {
  isLogin: false,
  email: "",
  name: "",
  password: "",
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isLogin = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    signUp: (
      state,
      action: PayloadAction<{ email: string; name: string; password: string }>
    ) => {
      console.log(action.payload);

      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
  },
});

export const { signIn, signUp } = signSlice.actions;
export default signSlice;
