import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

const userSlice = createSlice({
  // name에 들어가는 값 "user"가 곧 unique한 구분자
  name: "user",
  initialState,
  reducers: {
    // LoginForm이나 Register에서 dispatch(setEmail()) 하면 아래 코드가 실행됨
    // payload는 dispatch(setEmail(payload)) 안에 들어가는 payload 값임
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
