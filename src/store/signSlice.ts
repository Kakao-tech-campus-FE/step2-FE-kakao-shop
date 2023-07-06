import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkEmail, signIn, signUp } from "@/store/signAction";
import {
  EmailCheckResDto,
  SignInResDto,
  SignUpResDto,
} from "@/dtos/response.dto";

interface SignInState {
  loading: boolean;
  error: string | null;
  success: boolean;
  isLogin: boolean;
  isWarning: {
    email: boolean;
    password: boolean;
    passwordConfirm?: boolean;
    response: boolean;
  };
  data: {
    email: string;
    password: string;
    passwordConfirm?: string;
    username?: string;
  };
}

const initialState: SignInState = {
  isLogin: localStorage.getItem("isLogin") === "true" ? true : false,
  isWarning: {
    email: false,
    password: false,
    passwordConfirm: false,
    response: false,
  },
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.data.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.data.password = action.payload;
    },
    setPasswordConfirm: (state, action: PayloadAction<string>) => {
      state.data.passwordConfirm = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.data.username = action.payload;
    },
    setWarning: (
      state,
      action: PayloadAction<{
        email: boolean;
        password: boolean;
        passwordConfirm?: boolean;
        response: boolean;
      }>
    ) => {
      state.isWarning = action.payload;
    },
  },
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
        state.error =
          (action.payload as EmailCheckResDto["error"])?.message ?? "";
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
        state.error = (action.payload as SignUpResDto["error"])?.message ?? "";
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as SignInResDto["error"])?.message ?? "";
      });
  },
});

export const {
  setError,
  setEmail,
  setPassword,
  setPasswordConfirm,
  setUsername,
  setWarning,
} = signSlice.actions;

export default signSlice.reducer;
