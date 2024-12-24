import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`;
  if (["light", "dark"].includes(theme)) return theme;

  return "light";
};

const initialState = {
  themeCurrent: getTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      state.themeCurrent = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
