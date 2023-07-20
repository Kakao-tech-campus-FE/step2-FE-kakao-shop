import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkEmail, signIn, signUp } from "@/store/signAction";
import { isExpired } from "@/functions/jwt";
import { getAuth } from "@/functions/auth";

interface SignState {
  loading: boolean;
  error: string | null;
  success: boolean;
  isSignIn: boolean;
  data: {
    email: string;
    password: string;
    passwordConfirm: string;
    username: string;
  };
}

const initialState: SignState = {
  isSignIn: !isExpired(getAuth()),
  data: {
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  },
  loading: false,
  error: null,
  success: false,
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    setForm: (
      state,
      action: PayloadAction<{ name: keyof typeof state.data; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.data[name] = value;
    },
    setSignOut: (state) => {
      state.isSignIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload.success;
      })
      .addCase(checkEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "";
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload.success;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "";
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload.success;
        state.isSignIn = action.payload.success;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "";
      });
  },
});

export const { setForm, setSignOut } = signSlice.actions;

export default signSlice.reducer;
