import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

export const userSlice = createSlice({
  // name의 값은 store 전체에서 유일해야 한다.
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
