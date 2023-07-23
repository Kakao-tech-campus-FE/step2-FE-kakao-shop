import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  email:null,
  loginTime: null,
}

const userSlice = createSlice({
  name: "user", // name에 해당하는 값이 구분자 : 유니크 해야함 
  initialState,
  reducers:{ //reducer안에 담긴 것들이 action 
    setEmail: (state, action) => {
      state.email = action.payload.email
      state.loginTime = Date.now()
    }
  }
})

export const {setEmail} = userSlice.actions;
export default userSlice.reducer;  // userRedeucer 에 바인딩하기위해 필요
