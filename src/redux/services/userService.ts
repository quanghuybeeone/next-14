import axiosBaseQuery from '@/utils/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({ baseUrl: "/users" }),
    endpoints: (builder) => ({
        
    }),
});

export const { } = userApi;
