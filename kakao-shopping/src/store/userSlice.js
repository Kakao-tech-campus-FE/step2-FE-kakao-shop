import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
    isLogin: false,
    user: "",
    time: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.isLogin = true;
            state.user = action.payload.email;
            state.time = action.payload.time;
            console.log(action);
        },
        userLogout: (state) => {
            state.isLogin = false;
            state.user = "";
            state.time = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => initialState);
    },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
