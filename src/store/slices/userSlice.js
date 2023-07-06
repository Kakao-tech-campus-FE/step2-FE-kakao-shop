import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { login } from '../../apis/api';

const initialState = {
    email: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { 
        setEmail: (state, action) => { // setState의 역할
            state.email = action.payload.email;
        },
    },
});

// redux Thunk
// export const loginRequest = createAsyncThunk(
//     "user/loginRequest",
//     async (data) => {
//         const {email, password} = data;
//         const response = await login({email, password});
//         return response.data;
//     },
// );

export const {setEmail} = userSlice.actions;

export default userSlice.reducer;