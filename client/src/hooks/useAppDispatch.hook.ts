import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { recentSerachesActions } from '../redux/slices/recentSearches.slice'

const actions = {
    ...recentSerachesActions,
}

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
