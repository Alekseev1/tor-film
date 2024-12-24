import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileNav: false,
  mobileFilter: false,
  isClicked: false,
};

export const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    toggleNav(state, action) {
      state.mobileNav = action.payload;
    },
    toggleFilter(state, action) {
      state.mobileFilter = action.payload;
      state.isClicked = true;
    },
  },
});

export const { toggleNav, toggleFilter } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
