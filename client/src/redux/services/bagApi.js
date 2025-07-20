import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../utils/getBaseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/bags`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const tokens = localStorage.getItem("token");
    if (tokens) {
      Headers.set("Authorization", `Bearer ${tokens}`);
    }
    return Headers;
  },
});

export const bagsApi = createApi({
  reducerPath: "bagsApi",
  baseQuery,
  tagTypes: ["Bags"],
  endpoints: (builder) => ({
    fetchAllBags: builder.query({ query: () => "/", providesTags: ["Bags"] }),
    fetchSingleBag: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Bags", id }],
    }),
    addBag: builder.mutation({
      query: (newBag) => ({
        url: "/create-bag",
        method: "POST",
        body: newBag,
      }),
      invalidatesTags: ["Bags"],
    }),
    updateBag: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Bags"],
    }),
    deleteBag: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bags"],
    }),
  }),
});

export const {
  useFetchAllBagsQuery,
  useFetchSingleBagQuery,
  useAddBagMutation,
  useUpdateBagMutation,
  useDeleteBagMutation,
} = bagsApi;
