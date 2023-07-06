import {createSlice} from '@reduxjs/toolkit';

export const registerSlice = createSlice({
        name: 'user',
        initialState: {
            email: "",
            username: "",
            password: "",
            passwordConfirm: "",
        },
        reducers: {
            setEmail: (state, action) => {
                state.email = action.payload;
            },
            setName: (state, action) => {
                state.username = action.payload;
            },
            setPassword: (state, action) => {
                state.password = action.payload;
            },
            setPasswordConfirm: (state, action) => {
                state.passwordConfirm = action.payload;
            },
        }
    }
)

export const {setEmail, setName, setPassword, setPasswordConfirm} = registerSlice.actions;
export default registerSlice.reducer;