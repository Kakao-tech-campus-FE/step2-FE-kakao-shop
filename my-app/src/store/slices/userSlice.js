import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLogined: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.isLogined = action.payload.isLogined;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
