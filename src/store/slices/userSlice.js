import { createSlice } from "@reduxjs/toolkit";

// 슬라이스를 만들때 주의할 점 : initial state를 꼭 만들어 줘야 한다
const initialState = {
  email: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      // action으로 받은 email 정보를 state로 전달
      state.email = action.payload.email;
    }
  }
})

//만든 userSlice의 reducer를 export (reducer들은 .actions에 담겨있다.)
export const { setEmail } = userSlice.actions
// src/store/index.js는 export default로 userReducer를 받게 해놨으므로 userSlice의 리듀서도 export
export default userSlice.reducer;