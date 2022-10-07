import { useState } from 'react'
import { Slider } from '..'
import { useGetSelectedTypePropertiesQuery } from '../../store/fredbookingapi/fredbooking.api'
import style from './SelectedProperties.module.css'

const SelectedProperties = ({
    property,
    city,
    typeOfSearch,
}: {
    property: string
    city: string
    typeOfSearch: string
}) => {
    const [index, setIndex] = useState<number>(0)
    const [expand, setExpand] = useState<string[]>([])

    const query = {
        propertyType: property,
        city: city,
    }

    const type: string = 'perfect'

    const { isFetching, isError, data } =
        useGetSelectedTypePropertiesQuery(query)

    const onExpand = (id: string) => {
        if (expand.includes(id)) {
            setExpand(expand.filter((item) => item !== id))
        } else {
            setExpand([...expand, id])
        }
    }
    // const reviews = data?.map((item) => item.reviews)
    const getRate = (rate: number): string => {
        if (rate >= 9.5 && rate <= 10) {
            return 'Exeptional'
        } else if (rate >= 9 && rate <= 9.5) {
            return 'Wonderful'
        } else if (rate >= 8.5 && rate <= 9) {
            return 'Excellent'
        } else if (rate >= 8 && rate <= 8.5) {
            return 'Very Good'
        } else if (rate >= 7 && rate <= 8) {
            return 'Good'
        } else {
            return 'Review Score'
        }
    }
    return (
        <div className={style.container}>
            {isFetching && <p>Loading...</p>}
            {isError && (
                <p style={{ color: 'red' }}>
                    Something went wrong, plese reload the page or try later.
                </p>
            )}
            {data && (
                <div className={style.mainWrapper}>
                    <h3 className={style.mainTitle}>
                        {typeOfSearch === 'love'
                            ? `We love these ${query.propertyType.toLocaleLowerCase()}s in ${
                                  query.city
                              }`
                            : typeOfSearch === 'perfect'
                            ? `Find the perfect ${query.propertyType.toLocaleLowerCase()} in ${
                                  query.city
                              }`
                            : `A great selection of ${query.propertyType.toLocaleLowerCase()}s in ${
                                  query.city
                              }`}
                    </h3>

                    <div className={style.wrapper}>
                        <Slider
                            data={data ? data.length : 0}
                            maxEl={3}
                            index={index}
                            setIndex={setIndex}
                        />
                        <div className={style.cardsContainer}>
                            <div
                                className={style.cardsWrapper}
                                style={{
                                    transform: `translateX(${-369 * index}px)`,
                                }}
                            >
                                {data?.map(
                                    ({
                                        _id,
                                        city,
                                        country,
                                        description,
                                        name,
                                        photos,
                                        reviews,
                                    }) => (
                                        <div key={_id} className={style.card}>
                                            <div
                                                className={style.imageContainer}
                                            >
                                                <img
                                                    className={style.image}
                                                    src={photos}
                                                    alt={_id}
                                                />
                                            </div>
                                            <div className={style.info}>
                                                <div
                                                    className={
                                                        style.destination
                                                    }
                                                >
                                                    <h3 className={style.hotel}>
                                                        {name}
                                                    </h3>
                                                    <p
                                                        className={
                                                            style.location
                                                        }
                                                    >
                                                        {city}, {country}
                                                    </p>
                                                </div>
                                                <div className={style.rating}>
                                                    <div
                                                        className={style.badge}
                                                    >
                                                        <span>
                                                            {(
                                                                reviews.reduce(
                                                                    (
                                                                        prev,
                                                                        acc
                                                                    ) =>
                                                                        prev +
                                                                        acc
                                                                ) /
                                                                reviews.length
                                                            ).toFixed(1)}
                                                        </span>
                                                    </div>
                                                    <span
                                                        className={style.rate}
                                                    >
                                                        {getRate(
                                                            reviews.reduce(
                                                                (prev, acc) =>
                                                                    prev + acc
                                                            ) / reviews.length
                                                        )}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.reviews
                                                        }
                                                    >
                                                        {reviews.length} reviews
                                                    </span>
                                                </div>
                                                <div className={style.desc}>
                                                    <p
                                                        style={{
                                                            height: expand.includes(
                                                                _id
                                                            )
                                                                ? 'max-content'
                                                                : '50px',
                                                        }}
                                                    >
                                                        {expand.includes(_id)
                                                            ? description
                                                            : `${description.slice(
                                                                  0,
                                                                  150
                                                              )}...`}
                                                    </p>
                                                    <span
                                                        onClick={() =>
                                                            onExpand(_id)
                                                        }
                                                        className={style.show}
                                                    >
                                                        Show more
                                                    </span>
                                                </div>
                                                <div className={style.reserve}>
                                                    <a href="/">
                                                        Reserve this villa
                                                    </a>
                                                </div>
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

export default SelectedProperties
