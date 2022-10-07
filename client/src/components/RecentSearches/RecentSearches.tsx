import { useState } from 'react'
import { useAppSelector } from '../../hooks/useSelector.hook'
// import { data } from '../../data'
import RecentSearchedItem from '../RecentSearchedItem/RecentSearchedItem'
import Slider from '../Slider/Slider'
import style from './RecentSearches.module.css'

const RecentSearches = () => {
    const [index, setIndex] = useState<number>(0)
    const { recentSearches } = useAppSelector((state) => state.recenSearches)

    return (
        <>
            {recentSearches.length > 0 ? (
                <div className={style.container}>
                    <div className={style.wrapper}>
                        <h1 className={style.title}>Your Recent Searches</h1>
                        <div className={style.mainWrapper}>
                            <Slider
                                data={recentSearches.length}
                                maxEl={3}
                                index={index}
                                setIndex={setIndex}
                            />
                            <div className={style.cardsContainer}>
                                <div
                                    className={style.cardsWrapper}
                                    style={{
                                        transform: `translateX(${
                                            -371 * index
                                        }px)`,
                                    }}
                                >
                                    {recentSearches.map((item) => (
                                        <RecentSearchedItem
                                            key={item.id}
                                            {...item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ height: '80px' }}></div>
            )}
        </>
    )
}

export default RecentSearches
