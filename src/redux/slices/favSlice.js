import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavs(state, action) {
      state.items.push(action.payload);
    },
    deleteFromFavs(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToFavs, deleteFromFavs } = favSlice.actions;

export default favSlice.reducer;
