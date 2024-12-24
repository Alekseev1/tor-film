import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import searchReducer from "./slices/searchSlice";
import themeReducer from "./slices/themeSlice";
import favReducer from "./slices/favSlice";
import mobileNavReducer from "./slices/mobileNav";

import { setupListeners } from "@reduxjs/toolkit/query";
import { filmsApi } from "./filmsApi";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    theme: themeReducer,
    favors: favReducer,
    mobileNav: mobileNavReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

setupListeners(store.dispatch);
