import { createSlice } from "@reduxjs/toolkit";
import cookies from "react-cookies";

const initialState = {
    email: cookies.load('email'),
    token: cookies.load('token'),
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;

            const expires = new Date();
            expires.setDate(expires.getDate() + 1); // 1일
            // expires.setSeconds(expires.getSeconds() + 10); // test용 10초

            cookies.save('token', state.token, {
                path: '/',
                expires: expires,
            })
            cookies.save('email', state.email, {
                path: '/',
                expires: expires,
            })
        },
        logout: (state, action) => {
            state.email = null;
            state.token = null;
            cookies.remove('email');
            cookies.remove('token');
        }
    },
});

export const { setEmail, setToken, logout } = userSlice.actions;

export default userSlice.reducer;

