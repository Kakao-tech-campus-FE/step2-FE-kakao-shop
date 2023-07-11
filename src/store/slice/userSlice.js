import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: "",
    isLogin: false
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

export const {reducerLogin, reducerLogout} = userSlice.actions;
export default userSlice.reducer;