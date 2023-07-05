import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkEmail = createAsyncThunk(
  "sign/checkEmail",
  async (email: string) => {
    console.log(email);
  }
);

export const signUp = createAsyncThunk(
  "sign/signup",
  async (data: { email: string; name: string; password: string }, thunkAPI) => {
    console.log(data);

    try {
      const response = await fetch(
        import.meta.env.VITE_KAKAO_STORE_URL + "/join",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const resData = await response.json();
      return thunkAPI.fulfillWithValue(resData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
