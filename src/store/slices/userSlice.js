import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { 
        setEmail: (state, action) => { 
            state.email = action.payload.email;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

export const {setEmail, setUser} = userSlice.actions;
export default userSlice.reducer;