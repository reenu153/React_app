import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { getStorage } from './utils';


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api',  
      prepareHeaders: (headers) => {
      const token = getStorage("idToken");
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers;
    }, }),
    
    refetchOnMountOrArgChange:true,
    tagTypes:['EmployeeList'],
    endpoints: (builder) => ({
      
      getEmployees: builder.query({
        providesTags:['EmployeeList'],
        query:() => 'employee'
      }),
      
      getEmployeeById:builder.query({
        query:id=> `employee/${id}`
      }),

      createEmployee:builder.mutation({
        query:employee => ({
        url:`employee/`,
        method:"POST",
        body:employee
      }),
    }),
    Login:builder.mutation({
      query:employee => ({
      url:`employee/login`,
      method:"POST",
      body:employee
    }),
  }),
    deleteEmployee:builder.mutation({
      query:id => ({
        url:`employee/${id}`,
        method:"DELETE"
    }),
    invalidatesTags:['EmployeeList']
  }),

    updateEmployee:builder.mutation({
      query: ({ id,employee }) => ({
        url: `employee/${id}`,
        method: 'PUT',
        body:employee,
    
    }),
  }),

  })
})

  export const {useGetEmployeesQuery,useCreateEmployeeMutation,useGetEmployeeByIdQuery,useDeleteEmployeeMutation,useUpdateEmployeeMutation,useLazyGetEmployeeByIdQuery,useLoginMutation} = baseApi;