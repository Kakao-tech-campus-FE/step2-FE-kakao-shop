import {createSlice} from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: 'user',
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
})

export const {setEmail, setPassword} = loginSlice.actions;
export default loginSlice.reducer;