import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => '/posts'
    })
  })
})


export const { useGetAllDataQuery } = dataApi;
