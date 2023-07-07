import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {setId} = userSlice.actions
export default userSlice.reducer