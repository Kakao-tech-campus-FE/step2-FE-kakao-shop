import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  email: user,
};

export const userSlice = createSlice({
  // name의 값은 store 전체에서 유일해야 한다.
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
