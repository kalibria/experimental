import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dataApi = createApi({
  reducerPath: 'dataApi',
  tagTypes:['Text'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getAllData: builder.query({
       query: (limit = '') => `/posts?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Text', id })),
            { type: 'Text', id: 'LIST' },
          ]
          : [{ type: 'Text', id: 'LIST' }],
    }),
    addData: builder.mutation({
      query:(body)=>( {
        url: '/posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Text', id:'LIST'}]
    }),
  })
})


export const { useGetAllDataQuery, useAddDataMutation } = dataApi;
