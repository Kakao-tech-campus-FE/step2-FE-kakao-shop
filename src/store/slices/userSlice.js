import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email;
        }
    }
});

export const { setEmail } = userSlice.actions; // 지정한 reduecer들이 actions에 담겨있다.
export default userSlice.reducer; // reducer를 export한다.