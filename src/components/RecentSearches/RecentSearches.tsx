import { useState } from 'react'
import { data } from '../../data'
import RecentSearchedItem from '../RecentSearchedItem/RecentSearchedItem'
import Slider from '../Slider/Slider'
import style from './RecentSearches.module.css'

const RecentSearches = () => {
    const [index, setIndex] = useState<number>(0)

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <h1 className={style.title}>Your Recent Searches</h1>
                <div className={style.mainWrapper}>
                    <Slider
                        data={data.length}
                        maxEl={3}
                        index={index}
                        setIndex={setIndex}
                    />
                    <div className={style.cardsContainer}>
                        <div
                            className={style.cardsWrapper}
                            style={{
                                transform: `translateX(${-371 * index}px)`,
                            }}
                        >
                            {data.map((item) => (
                                <RecentSearchedItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentSearches
