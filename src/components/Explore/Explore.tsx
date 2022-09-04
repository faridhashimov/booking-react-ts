import axios from 'axios'
import { useEffect, useState } from 'react'
import { Slider } from '../../components'
import { explore } from '../../data'
import style from './Explore.module.css'

const Explore = () => {
    const [index, setIndex] = useState<number>(0)
    const [country, setCountry] = useState<string>('')

    useEffect(() => {
        const getGeoInfo = async () => {
            await axios
                .get('https://ipapi.co/json/')
                .then((response) => {
                    let data = response.data
                    setCountry(data.country_name)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        getGeoInfo()
    }, [])

    console.log(country)

    return (
        <div className={style.container}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>Explore {country}</h1>
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
