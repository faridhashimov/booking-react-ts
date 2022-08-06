import { useState } from 'react'
import { browse } from '../../data'
import Slider from '../Slider/Slider'
import style from './BrowseProperty.module.css'

const BrowseProperty = () => {
    const [index, setIndex] = useState<number>(0)

    return (
        <div className={style.container}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>Browse by property type</h1>

                <div className={style.wrapper}>
                    <Slider
                        data={browse.length}
                        maxEl={4}
                        index={index}
                        setIndex={setIndex}
                    />
                    <div className={style.cardsContainer}>
                        <div
                            className={style.cardsWrapper}
                            style={{
                                transform: `translateX(${-279 * index}px)`,
                            }}
                        >
                            {browse.map(({ id, img, city, info }) => (
                                <div key={id} className={style.card}>
                                    <div className={style.imageContainer}>
                                        <img
                                            className={style.image}
                                            src={img}
                                            alt=""
                                        />
                                    </div>
                                    <div className={style.info}>
                                        <h3 className={style.title}>{city}</h3>
                                        <span className={style.desc}>
                                            {info}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseProperty
