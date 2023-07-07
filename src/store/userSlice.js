import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: "test@tester.com",
    isLogin: true
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        reducerLogin: (state, action) => {
            state.isLogin = true;
            state.email = action.payload;
        },
        reducerLogout: (state) => {
            state.isLogin = false;
        }
    }
})

export const {setEmail, reducerLogin, reducerLogout} = userSlice.actions;
export default userSlice.reducer;