import { configureStore } from '@reduxjs/toolkit'
import { fredbookingApi } from './fredbookingapi/fredbooking.api'
import { recentSerachesReducer } from './fredbookingapi/recentSearches.slice'

export const store = configureStore({
    reducer: {
        [fredbookingApi.reducerPath]: fredbookingApi.reducer,
        recenSearches: recentSerachesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fredbookingApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
