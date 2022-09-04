import style from './RecentSearchedItem.module.css'
import { DestinationCardType } from '../../types'

const RecentSearchedItem = ({ img, city, info }: DestinationCardType) => {
    return (
        <div className={style.card}>
            <div className={style.cardImageContainer}>
                <img className={style.cardImage} src={img} alt="" />
            </div>
            <div className={style.cardInfo}>
                <h3 className={style.cardTitle}>{city}</h3>
                <span className={style.guestsInfo}>{info}</span>
            </div>
        </div>
    )
}

export default RecentSearchedItem
