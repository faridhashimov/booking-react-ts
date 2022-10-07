import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    IBrowseByType,
    IFeaturedDestinationsByType,
    IHotels,
    IPopularDestinationsByCountry,
    SelectedType,
} from '../../models/models'

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
        getPromotedCitiesPropeties: builder.query<
            [IPopularDestinationsByCountry][],
            string
        >({
            query: (name: string) => ({
                url: `property/cities?name=${name}`,
            }),
        }),
        getPropetiesByType: builder.query<IBrowseByType[], string>({
            query: () => ({
                url: `property/browsebytype`,
            }),
        }),
        getFeauturedPropertyDestinations: builder.query<
            IFeaturedDestinationsByType[],
            { type: string; cities: string }
        >({
            query: (query: { type: string; cities: string }) => ({
                url: `property/featured?type=${query.type}&cities=${query.cities}`,
            }),
        }),
        getSelectedTypeProperties: builder.query<
            SelectedType[],
            { propertyType: string; city: string }
        >({
            query: (query: { propertyType: string; city: string }) => ({
                url: `property/selected?type=${query.propertyType}&city=${query.city}`,
            }),
        }),
        getProperties: builder.query<IHotels[], string>({
            query: (query: string) => ({
                url: `property${query}`,
            }),
        }),
    }),
})

export const {
    useGetPopularDestinationsByCountryQuery,
    useGetPromotedCitiesPropetiesQuery,
    useGetPropetiesByTypeQuery,
    useGetPropertiesQuery,
    useGetFeauturedPropertyDestinationsQuery,
    useGetSelectedTypePropertiesQuery,
} = fredbookingApi
