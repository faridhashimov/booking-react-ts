import { DestinationCardType } from '../../types'
import style from './Card.module.css'

const Card = ({ img, city, info }: DestinationCardType) => {
    return (
        <div className={style.card}>
            <div className={style.imageContainer}>
                <img className={style.image} src={img} alt="" />
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{city}</h3>
                <span className={style.desc}>{info}</span>
            </div>
        </div>
    )
}

export default Card
