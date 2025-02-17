import { useAppSelector } from '../../hooks/useSelector.hook'

export const useAuth = () => {
    const auth = useAppSelector((state) => state.auth.auth)

    return {
        isAuth: auth ? true : false,
        user: auth,
    }
}
