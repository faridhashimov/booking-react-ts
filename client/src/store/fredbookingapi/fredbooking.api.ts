import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPopularDestinationsByCountry } from '../../models/models'

export const fredbookingApi = createApi({
    reducerPath: 'fredbookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api/' }),
    endpoints: (builder) => ({
        getPopularDestinationsByCountry: builder.query<
            IPopularDestinationsByCountry[],
            string
        >({
            query: (name: string) => ({
                url: `property/country?name=${name}`,
            }),
        }),
    }),
})

export const { useGetPopularDestinationsByCountryQuery } = fredbookingApi
