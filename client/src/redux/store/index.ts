import { configureStore } from '@reduxjs/toolkit'
import { fredbookingApi } from '../../api/fredbookingapi/fredbooking.api'
import { recentSerachesReducer } from '../slices/recentSearches.slice'
import { authReducer } from '../slices/auth.slice'

export const store = configureStore({
    reducer: {
        [fredbookingApi.reducerPath]: fredbookingApi.reducer,
        recenSearches: recentSerachesReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fredbookingApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
