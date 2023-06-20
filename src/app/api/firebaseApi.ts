import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const firebaseApiSlice = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Firebase"],
  endpoints: () => ({}),
  reducerPath: "firebaseApi",
});
