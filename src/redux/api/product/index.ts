import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getEpic: build.query<EPIC.GetEpicImageResponse, EPIC.GetEpicImageRequest>({
      query: () => ({
        url: ``,
        method: "GET",
      }),
      providesTags: ["epic"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetEpicQuery } = api;
