import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
};

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload.searchResult;
    },
  },
});

export const { setSearchResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
