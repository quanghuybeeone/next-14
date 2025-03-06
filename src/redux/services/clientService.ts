import axiosBaseQuery from "@/utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { User } from "../slices/authSlice";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    login: builder.mutation<{ status: number, data: { token: string; user: User } }, { username: string; password: string }>({
      query: (credentials) => ({
        url: "/users/authenticate",
        method: "POST",
        data: credentials,
      }),
    }),
    getMe: builder.query<{ status: number; data: { user: User } }, void>({
      query: () => ({ url: "/me" }),
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = clientApi;
