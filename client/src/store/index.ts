import { configureStore } from '@reduxjs/toolkit'
import { fredbookingApi } from './fredbookingapi/fredbooking.api'

export const store = configureStore({
    reducer: {
        [fredbookingApi.reducerPath]: fredbookingApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fredbookingApi.middleware),
})
