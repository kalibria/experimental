import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes:['goods'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getGoods: builder.query({
       query: (limit = '') => `/goods?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'goods', id })),
            { type: 'goods', id: 'LIST' },
          ]
          : [{ type: 'goods', id: 'LIST' }],
    }),
    addGoods: builder.mutation({
      query:(body)=>( {
        url: '/goods',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'goods', id:'LIST'}]
    }),
  })
})


export const { useGetGoodsQuery, useAddGoodsMutation } = goodsApi;
