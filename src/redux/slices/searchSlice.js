import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchStatus: false,
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsSearch: (state, action) => {
      state.isSearchStatus = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setIsSearch, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
