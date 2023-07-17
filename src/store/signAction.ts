import { DefaultResDto, responseError } from "@/dtos/response.dto";
import { getAuth, setAuth } from "@/functions/auth";
import { commonAxios } from "@/functions/axios";
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
      const response = await commonAxios.post("/check", { email });
      const resData = new DefaultResDto(response.data);

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
      const response = await commonAxios.post("/join", data);
      const resData = new DefaultResDto(response.data);

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
      const response = await commonAxios.post("/login", data);

      const resData = new DefaultResDto(await response.data);
      if (resData.error) {
        return rejectWithValue(resData.error);
      }

      const authHeader = response.headers.authorization;

      if (jwtDecode(getAuth()).exp <= jwtDecode(authHeader ?? "").exp) {
        setAuth(authHeader.split("Bearer ")[1] ?? "");
      }

      return fulfillWithValue(resData);
    } catch (error) {
      return rejectWithValue({ message: String(error), status: 400 });
    }
  }
);
