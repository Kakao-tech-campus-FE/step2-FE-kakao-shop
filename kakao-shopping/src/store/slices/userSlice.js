import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우: 요청이 없었거나, 실패했거나, 성공했을 때 false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },

    // redux-thunk

    // extraReducers: (builder) => {
    //   builder.addCase(loginRequest.pending, (state, action = n) => {
    //     state.loading = true;
    //   });
    //   builder.addCase(loginRequest.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.email = action.payload.email;
    //   });
    // },
  },
});

// export const loginRequest = createAsyncThunk("user/loginRequest", async (data) => {
//   const { email, password } = data;
//   const response = await login({ email, password });
//   return {
//     email: email,
//     token: response.headers.authorization,
//   };
// });
    setEmail: (State, action) => {
      state.email = action.payload.email;
    },
    extraReducers: (builder) => {
      builder.addCase(loginRequest.pending, (state, acti = n) => {
        state.loading = true;
      });
      builder.addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.email;
      });
    },
  },
});

export const loginReq = createAsyncThunk("user/login", async (data) => {
  const { email, password } = data;
  const response = await login({ email, password });
  return {
    email: email,
    token: response.headers.authorization,
  };
});

export const { setEmail } = userSlice.actions;
export default userSlice.reducer;
