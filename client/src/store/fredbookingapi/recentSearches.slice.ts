import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RecentSearchesState {
    id: string
    city: string
    img: string
    checkin: Date
    checkout: Date
    guests: number
}

const RECENT_SEARCHES = 'h@dDsb%67Kish3272'
const initialState = {
    recentSearches: JSON.parse(
        localStorage.getItem(RECENT_SEARCHES) ?? '[]'
    ) as RecentSearchesState[],
}

export const recentSearchesSlice = createSlice({
    name: 'recentSearches',
    initialState,
    reducers: {
        addToRecentSearches(state, action: PayloadAction<RecentSearchesState>) {
            const { city, checkin, checkout } = action.payload

            if (
                state.recentSearches.some(
                    (e) =>
                        e.city === city &&
                        e.checkin === checkin &&
                        e.checkout === checkout
                )
            ) {
                return
            } else {
                state.recentSearches.push(action.payload)
            }

            localStorage.setItem(
                RECENT_SEARCHES,
                JSON.stringify(state.recentSearches)
            )
        },
    },
})

export const recentSerachesActions = recentSearchesSlice.actions
export const recentSerachesReducer = recentSearchesSlice.reducer
