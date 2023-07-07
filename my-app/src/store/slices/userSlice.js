import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogined: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.isLogined = action.payload.isLogined;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
