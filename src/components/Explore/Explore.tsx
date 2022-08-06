import { useState } from 'react'
import { Slider } from '../../components'
import { explore } from '../../data'
import style from './Explore.module.css'

const Explore = () => {
    const [index, setIndex] = useState<number>(0)

    return (
        <div className={style.container}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>Explore Russia</h1>
                <p className={style.mainDesc}>
                    These popular destinations have a lot to offer
                </p>
                <div className={style.wrapper}>
                    <Slider
                        data={explore.length}
                        maxEl={6}
                        index={index}
                        setIndex={setIndex}
                    />
                    <div className={style.cardsContainer}>
                        <div
                            className={style.cardsWrapper}
                            style={{
                                transform: `translateX(${-186 * index}px)`,
                            }}
                        >
                            {explore.map(({ id, img, city, info }) => (
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

export default Explore
