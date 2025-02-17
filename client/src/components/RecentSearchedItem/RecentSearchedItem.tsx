import style from './RecentSearchedItem.module.css'
import { RecentSearchesState } from '../../redux/slices/recentSearches.slice'

const RecentSearchedItem = ({
    img,
    city,
    checkin,
    checkout,
    guests,
}: RecentSearchesState) => {
    return (
        <div className={style.card}>
            <div className={style.cardImageContainer}>
                <img
                    className={style.cardImage}
                    src={
                        img
                            ? img
                            : 'https://t-cf.bstatic.com/static/img/default_city_new/f6332c2300fb1a707f474aac290203ad5eb5590d.gif'
                    }
                    alt={city}
                />
            </div>
            <div className={style.cardInfo}>
                <h3 className={style.cardTitle}>{city}</h3>
                <span
                    className={style.guestsInfo}
                >{`${checkin}-${checkout}, ${guests} people`}</span>
            </div>
        </div>
    )
}

export default RecentSearchedItem
