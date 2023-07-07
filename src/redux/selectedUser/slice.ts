import { createSlice } from "@reduxjs/toolkit";

const { reducer: selectedUserReducer, actions } = createSlice({
  name: "selectedUser",
  initialState: false,
  reducers: {
    setSelectedUser: (state, action) => action.payload,
  },
});

export const { setSelectedUser } = actions;

export default selectedUserReducer;
