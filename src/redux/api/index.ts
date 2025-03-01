import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
});

const baseQueryExtended: BaseQueryFn = (args, api, extraOptions) => {
  return baseQuery(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["epic"],
  endpoints: () => ({}),
});
