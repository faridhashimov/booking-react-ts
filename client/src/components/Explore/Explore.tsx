import axios from 'axios'
import { useEffect, useState } from 'react'
import { Slider } from '../../components'
import { explore } from '../../data'
import { useGetPopularDestinationsByCountryQuery } from '../../store/fredbookingapi/fredbooking.api'
import ExploreItemsLoading from '../Skeletons/ExploreItemsLoading'
import style from './Explore.module.css'

const Explore = () => {
    const [index, setIndex] = useState<number>(0)
    const [country, setCountry] = useState<string>('')

    const { isFetching, isError, data } =
        useGetPopularDestinationsByCountryQuery(country)

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

    return (
        <div className={style.container}>
            {isFetching && <ExploreItemsLoading />}
            {isError && (
                <p style={{ color: 'red' }}>
                    Something went wrong, plese reload the page or try later.
                </p>
            )}
            {data && (
                <div className={style.mainWrapper}>
                    <h1 className={style.mainTitle}>Explore {country}</h1>
                    <p className={style.mainDesc}>
                        These popular destinations have a lot to offer
                    </p>

                    <div className={style.wrapper}>
                        <Slider
                            data={data ? data.length : 0}
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
                                {data?.map(
                                    ({ _id, cityPhoto, totalProperties }) => (
                                        <div key={_id} className={style.card}>
                                            <div
                                                className={style.imageContainer}
                                            >
                                                <img
                                                    className={style.image}
                                                    src={cityPhoto}
                                                    alt=""
                                                />
                                            </div>
                                            <div className={style.info}>
                                                <h3 className={style.title}>
                                                    {_id}
                                                </h3>
                                                <span className={style.desc}>
                                                    {totalProperties} properties
                                                </span>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Explore
