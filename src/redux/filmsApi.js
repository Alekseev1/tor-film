import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66ba2dacfa763ff550fb11dd.mockapi.io/films",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: ({ year, category, search, sortBy, order, country, genre }) =>
        `?${category}&search=${search || ""}&sortBy=${sortBy || ""}&order=${
          order || ""
        }${year || ""}${country || ""}${genre || ""}`,
    }),
    getFilmsUpdates: builder.query({
      query: () => `?category=1`,
    }),
    getFilmById: builder.query({
      query: ({ id }) => `/${id}`,
    }),
  }),
});

export const {
  useGetFilmByIdQuery,
  useGetFilmsQuery,
  useGetFilmsUpdatesQuery,
} = filmsApi;
