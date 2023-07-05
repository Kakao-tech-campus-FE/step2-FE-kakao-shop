import { createSlice } from "@reduxjs/toolkit";
import { checkEmail, signUp } from "@/store/signAction";

interface SignState {
  loading: boolean;
  error: string | null;
  success: boolean;
  isLogin: boolean;
}

const initialState: SignState = {
  isLogin: localStorage.getItem("isLogin") === "true" ? true : false,
  loading: false,
  error: null,
  success: false,
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(checkEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default signSlice.reducer;
