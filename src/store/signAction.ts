import { EmailCheckResDto, SignUpResDto } from "@/dtos/response.dto";
import { jwtDecode } from "@/functions/jwt";
import { localStorage } from "@/functions/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkEmail = createAsyncThunk(
  "sign/checkEmail",
  async (email: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_KAKAO_STORE_URL + "check",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const resData = new EmailCheckResDto(await response.json());

      if (resData.error) {
        return rejectWithValue(resData.error);
      }
      return fulfillWithValue(resData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "sign/signup",
  async (
    data: { email: string; username: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_KAKAO_STORE_URL + "join",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const resData = new SignUpResDto(await response.json());
      if (resData.error) {
        return thunkAPI.rejectWithValue(resData.error);
      }
      return thunkAPI.fulfillWithValue(resData.success);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "sign/signin",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_KAKAO_STORE_URL + "login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const resData = new SignUpResDto(await response.json());
      if (resData.error) {
        return thunkAPI.rejectWithValue(resData.error);
      }

      if (
        jwtDecode(localStorage.get("Authorization")).exp <=
        jwtDecode(response.headers.get("Authorization") ?? "").exp
      ) {
        localStorage.set(
          "Authorization",
          response.headers.get("Authorization")?.split("Bearer ")[1] ?? ""
        );
      }

      return thunkAPI.fulfillWithValue(resData.success);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
