import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { recentSerachesActions } from '../store/fredbookingapi/recentSearches.slice'

const actions = {
    ...recentSerachesActions,
}

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
