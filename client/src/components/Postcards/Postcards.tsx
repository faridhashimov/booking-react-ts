import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useSelector.hook'
import { useGetPromotedCitiesPropetiesQuery } from '../../store/fredbookingapi/fredbooking.api'
import PostcardsLoading from '../Skeletons/PostcardsLoading'
import style from './Postcards.module.css'

const Postcards = () => {
    const navigate = useNavigate()
    const { recentSearches } = useAppSelector((state) => state.recenSearches)
    const { isFetching, isError, data } = useGetPromotedCitiesPropetiesQuery(
        'New%20York,Prague,Rome,Dubai,Boston'
    )

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    const checkin = recentSearches[0]?.checkin
        ? recentSearches[0]?.checkin
        : format(new Date(), 'eee, MMM d')
    const checkout = recentSearches[0]?.checkout
        ? recentSearches[0]?.checkout
        : format(tomorrow, 'eee, MMM d')

    const onPostcardSelected = (city: string) => {
        navigate(
            `/hotels?city=${city}&checkin=${checkin}&checkout=${checkout}&adults=${2}&children=${0}&room=${1}`
        )
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                {isFetching && <PostcardsLoading />}
                {isError && (
                    <p style={{ color: 'red' }}>
                        Something went wrong, plese reload the page or try
                        later.
                    </p>
                )}
                {data?.map((item) => (
                    <div
                        onClick={() => onPostcardSelected(item[0]._id)}
                        key={item[0]._id}
                        className={style.cardContainer}
                    >
                        <img
                            className={style.cardImage}
                            src={item[0].cityPhoto}
                            alt={item[0]._id}
                        />
                        <div className={style.cardInfo}>
                            <h3 className={style.cardTitle}>{item[0]._id}</h3>
                            <p className={style.cardDesc}>
                                {item[0].totalProperties} properties
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Postcards
