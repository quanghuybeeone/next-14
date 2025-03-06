import axiosBaseQuery from "@/utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { User } from "../slices/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: "/auth" }), // /auth
  endpoints: (builder) => ({
    signIn: builder.mutation<{ status: number, data: { token: string; user: User } }, { username: string; password: string }>({
      query: (credentials) => ({
        url: "/users/authenticate",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
