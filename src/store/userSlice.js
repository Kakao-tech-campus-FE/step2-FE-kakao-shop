import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: "test@tester.com",
    isLogin: true
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        reducerLogin: (state) => {
            state.isLogin = true;
        },
        reducerLogout: (state) => {
            state.isLogin = false;
        }
    }
})

export const {setEmail, reducerLogin, reducerLogout} = userSlice.actions;
export default userSlice.reducer;