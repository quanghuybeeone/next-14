import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axiosInstance from "@/utils/axiosInstance";

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): BaseQueryFn<
    { url: string; method?: string; data?: any; params?: any },
    unknown,
    unknown
> =>
    async ({ url, method = "GET", data, params }) => {
        try {
            const result = await axiosInstance({ url: baseUrl + url, method, data, params });
            return { data: result.data };
        } catch (axiosError: any) {
            return { error: axiosError.response?.data || axiosError.message };
        }
    };

export default axiosBaseQuery;
