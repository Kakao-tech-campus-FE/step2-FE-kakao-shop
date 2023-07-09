import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.email;
    }
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;
// export default userSlice.reducer;

export const {setEmail} = userSlice.actions;
export default userSlice.reducer;
