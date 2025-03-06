import axiosBaseQuery from '@/utils/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: axiosBaseQuery({ baseUrl: "/products" }),
    tagTypes: ['Products', 'Product'], // Định nghĩa tags

    endpoints: (builder) => ({
        // Lấy danh sách sản phẩm
        getProducts: builder.query({
            query: () => ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['Products'], // Gán tag để có thể invalidate khi cần
        }),

        // Lấy chi tiết sản phẩm theo ID
        getProductById: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'Product', id }], // Gán tag theo ID sản phẩm
        }),

        // Thêm sản phẩm mới
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/',
                method: 'POST',
                data: newProduct,
            }),
            invalidatesTags: ['Products'], // Refetch danh sách sản phẩm
        }),

        // Cập nhật sản phẩm theo ID
        updateProduct: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/${id}`,
                method: 'PUT',
                data: updatedData,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }], // Refetch sản phẩm vừa cập nhật
        }),

        // Xóa sản phẩm theo ID
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products'], // Refetch danh sách sản phẩm
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;
