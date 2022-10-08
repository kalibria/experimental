import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getAllData: builder.query({
      // query:(limit)=>'/posts'
       query: (limit = '') => `/posts?${limit && `_limit=${limit}`}`
    })
  })
})


export const { useGetAllDataQuery } = dataApi;
