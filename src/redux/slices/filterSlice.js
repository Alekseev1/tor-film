import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  selectSort1: { index: -1, sort: "" },
  selectSort2: { index: -1, sort: "" },
  selectSort3: { index: -1, sort: "" },
  selectSort4: { index: -1, sort: "" },
  selectSortGenre: { index: -1, sort: "" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort1(state, action) {
      state.selectSort1 = action.payload;
    },
    setSort2(state, action) {
      state.selectSort2 = action.payload;
    },
    setSort3(state, action) {
      state.selectSort3 = action.payload;
    },
    setSort4(state, action) {
      state.selectSort4 = action.payload;
    },
    setSortGenre(state, action) {
      state.selectSortGenre = action.payload;
    },
    deleteSorts(state) {
      state.selectSort1 = { index: 0, sort: "" };
      state.selectSort2 = { index: 0, sort: "" };
      state.selectSort3 = { index: 0, sort: "" };
      state.selectSort4 = { index: 0, sort: "" };
      state.selectSortGenre = { index: 0, sort: "" };
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.selectSort1 = action.payload.selectSort1;
      state.selectSort2 = action.payload.selectSort2;
      state.selectSort3 = action.payload.selectSort3;
      state.selectSort4 = action.payload.selectSort4;
      state.selectSortGenre = action.payload.selectSortGenre;
    },
  },
});

export const {
  setCategoryId,
  setSort1,
  setSort2,
  setSort3,
  setSort4,
  setSortGenre,
  setFilters,
  deleteSorts,
} = filterSlice.actions;

export default filterSlice.reducer;
