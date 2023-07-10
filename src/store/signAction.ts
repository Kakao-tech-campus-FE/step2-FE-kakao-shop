import { DefaultResDto, responseError } from "@/dtos/response.dto";
import { getAuth, setAuth } from "@/functions/auth";
import { jwtDecode } from "@/functions/jwt";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkEmail = createAsyncThunk<
  DefaultResDto,
  string,
  { rejectValue: responseError }
>(
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

      const resData = new DefaultResDto(await response.json());

      if (resData.error) {
        return rejectWithValue(resData.error);
      }
      return fulfillWithValue(resData);
    } catch (error) {
      return rejectWithValue({ message: String(error), status: 400 });
    }
  }
);

type signUpData = {
  email: string;
  username: string;
  password: string;
};

export const signUp = createAsyncThunk<
  DefaultResDto,
  { email: string; username: string; password: string },
  { rejectValue: responseError }
>(
  "sign/signup",
  async (data: signUpData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_KAKAO_STORE_URL + "join",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const resData = new DefaultResDto(await response.json());
      if (resData.error) {
        return rejectWithValue(resData.error);
      }
      return fulfillWithValue(resData);
    } catch (error) {
      return rejectWithValue({ message: String(error), status: 400 });
    }
  }
);

type signInData = {
  email: string;
  password: string;
};

export const signIn = createAsyncThunk<
  DefaultResDto,
  { email: string; password: string },
  { rejectValue: responseError }
>(
  "sign/signin",
  async (data: signInData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_KAKAO_STORE_URL + "login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const resData = new DefaultResDto(await response.json());
      if (resData.error) {
        return rejectWithValue(resData.error);
      }

      if (
        jwtDecode(getAuth()).exp <=
        jwtDecode(response.headers.get("Authorization") ?? "").exp
      ) {
        setAuth(
          response.headers.get("Authorization")?.split("Bearer ")[1] ?? ""
        );
      }

      return fulfillWithValue(resData);
    } catch (error) {
      return rejectWithValue({ message: String(error), status: 400 });
    }
  }
);
