import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {register} from "../../services/api";
const initialState = {
  username : null,
  email : null,
  loading : false,
  error : null,
  redirect : false,
};

const regiuserSlice = createSlice({
  name : "user",
  initialState,
  reducers : {
    setEmail: (state, action) =>{
      state.email = action.payload.email;
    }},
    extraReducers:(builder)=>{
      builder.addCase(registerRequest.pending, (state)=>{
        state.loading = true;
      });
      builder.addCase(registerRequest.fulfilled, (state, action) =>{
        state.loading = false;
        state.email = action.payload.email;
      });
      builder.addCase(registerRequest.rejected, (state) =>{
        state.loading = false;
      });
    },
});

export const registerRequest = createAsyncThunk(
  "user/registerRequest",
  async(data) =>{
    const { email, password, username} = data;
    const response = await register({email, password, username});
    return response.data;
  }
);

export const { setEmail } = regiuserSlice.actions;

export default regiuserSlice.reducer;