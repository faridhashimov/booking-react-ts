import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { recentSerachesActions } from '../slices/recentSearches.slice'

const actions = {
    ...recentSerachesActions,
}

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
