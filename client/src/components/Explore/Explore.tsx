import axios from 'axios'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Slider } from '../../components'
import { useAppSelector } from '../../hooks/useSelector.hook'
import { useGetPopularDestinationsByCountryQuery } from '../../api/fredbookingapi/fredbooking.api'
import ExploreItemsLoading from '../Skeletons/ExploreItemsLoading'
import style from './Explore.module.css'

const Explore = () => {
    const [index, setIndex] = useState<number>(0)
    const [country, setCountry] = useState<string>('')
    const navigate = useNavigate()

    const { recentSearches } = useAppSelector((state) => state.recenSearches)

    const { isFetching, isError, data } =
        useGetPopularDestinationsByCountryQuery('Russia')

    console.log(country)

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

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    const checkin = recentSearches[0]?.checkin
        ? recentSearches[0]?.checkin
        : format(new Date(), 'eee, MMM d')
    const checkout = recentSearches[0]?.checkout
        ? recentSearches[0]?.checkout
        : format(tomorrow, 'eee, MMM d')

    const onCitySelected = (city: string) => {
        navigate(
            `/hotels?city=${city}&checkin=${checkin}&checkout=${checkout}&adults=${2}&children=${0}&room=${1}`
        )
    }

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
                    <h1 className={style.mainTitle}>Explore {'Russia'}</h1>
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
                                        <div
                                            onClick={() => onCitySelected(_id)}
                                            key={_id}
                                            className={style.card}
                                        >
                                            <div
                                                className={style.imageContainer}
                                            >
                                                <img
                                                    className={style.image}
                                                    src={cityPhoto}
                                                    alt={_id}
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
