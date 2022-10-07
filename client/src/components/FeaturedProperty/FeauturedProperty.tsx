import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetFeauturedPropertyDestinationsQuery } from '../../store/fredbookingapi/fredbooking.api'
import ExploreItemsLoading from '../Skeletons/ExploreItemsLoading'
import Slider from '../Slider/Slider'
import style from './FeauturedProperty.module.css'

const FeauturedProperty = () => {
    const [index, setIndex] = useState<number>(0)
    const location = useLocation()
    const typeOfProperty: string = location.search.substring(6)

    const query = {
        type: typeOfProperty,
        cities:
            typeOfProperty === 'Villa'
                ? 'Protaras,Orlando,Kissimmee,Davenport,Destin,Kyoto,Seminyak'
                : typeOfProperty === 'Resort'
                ? 'Hurghada,Ubud,Sharm El Sheikh,Ko Lanta,Orlando,Ko Chan,Wailea'
                : typeOfProperty === 'Hostel '
                ? 'Bangkok,Moscow,Lisbon,Kyiv,Saint Petersburg,Cairo,Barcelona'
                : typeOfProperty === 'Motel '
                ? 'Christchurch,Auckland,Houston,Taupo,Brisbane,Rockhampton,Los Angeles'
                : 'Dubai,Rome,Athens,London,Lisbon,Paris,Milan',
    }
    const { isFetching, isError, data } =
        useGetFeauturedPropertyDestinationsQuery(query)

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
                    <h1 className={style.mainTitle}>
                        Featured {typeOfProperty} Destinations
                    </h1>
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
                                    transform: `translateX(${-184 * index}px)`,
                                }}
                            >
                                {data?.map((property) => (
                                    <div
                                        // onClick={() => onCitySelected(_id)}
                                        key={property._id}
                                        className={style.card}
                                    >
                                        <div className={style.imageContainer}>
                                            <img
                                                className={style.image}
                                                src={property.cityPhoto}
                                                alt={property._id}
                                            />
                                        </div>
                                        <div className={style.info}>
                                            <p className={style.city}>
                                                {property._id}
                                            </p>
                                            <p className={style.country}>
                                                {property.country}
                                            </p>
                                            <p className={style.count}>
                                                {property.totalProperties}&nbsp;
                                                {property.totalProperties > 1
                                                    ? typeOfProperty.toLowerCase() +
                                                      's'
                                                    : typeOfProperty.toLowerCase()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FeauturedProperty
