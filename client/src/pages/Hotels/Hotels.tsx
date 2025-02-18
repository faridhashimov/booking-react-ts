import {
    Footer,
    MainNavbar,
    Navbar,
    Subscribe,
    SidebarSearch,
} from '../../components'
import { FiCheckSquare, FiChevronRight, FiSquare } from 'react-icons/fi'
import style from './Hotels.module.css'
import { useState, useEffect, FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetPropertiesQuery } from '../../api/fredbookingapi/fredbooking.api'
import { IQueryString } from '../../components/SidebarSearch/SidebarSearch'
import qs from 'qs'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from 'store/hooks/useAppDispatch.hook'

export const Hotels: FC = () => {
    const [wishlist, setWishlist] = useState<string[]>([])
    const [showFilters, setShowFilters] = useState<boolean>(false)
    const [filterChecked, setFilterChecked] = useState<string[]>([])
    const location = useLocation()
    const navigate = useNavigate()
    const { addToRecentSearches } = useAppDispatch()
    const { city, checkin, checkout, children, adults, room, star, distance } =
        qs.parse(location.search.substring(1)) as unknown as IQueryString

    const { data } = useGetPropertiesQuery(
        // &checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&room=${room}
        `?city=${city}&star=${star ? star : '1'}&distance=${
            distance ? distance : '1'
        }`
    )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    console.log(distance)

    const onAddToWishlist = (id: string) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter((i) => i !== id))
        } else {
            setWishlist((prev) => [...prev, id])
        }
    }

    console.log(filterChecked)

    type Filters = {
        star?: [string, number][]
        cancellation?: [string, number][]
        meals?: [string, number][]
        distance?: [string, number][]
        property?: [string, number][]
    }

    const [filters, setFilters] = useState<Filters>({
        star: [],
        cancellation: [],
        meals: [],
        distance: [],
        property: [],
    })

    useEffect(() => {
        data &&
            setFilters({
                star: Object.entries(
                    data
                        ?.map((item) => item.star)
                        .reduce((acc: Record<string, number>, value) => {
                            return {
                                ...acc,
                                [value]: (acc[value] || 0) + 1,
                            }
                        }, {})!
                ),
                cancellation: Object.entries(
                    data
                        ?.map((item) => item.cancellationPolicy)
                        .reduce((acc: Record<string, number>, value) => {
                            return {
                                ...acc,
                                [value]: (acc[value] || 0) + 1,
                            }
                        }, {})!
                ),
                meals: Object.entries(
                    data
                        ?.map((item) => item.meals)
                        .reduce((acc: Record<string, number>, value) => {
                            return {
                                ...acc,
                                [value]: (acc[value] || 0) + 1,
                            }
                        }, {})!
                ),
                distance: Object.entries(
                    data
                        ?.map((item) => {
                            return Object.assign({}, item, {
                                distance:
                                    +item.distance / 1000 < 1
                                        ? ['Less than 1 km', +item.distance]
                                        : +item.distance / 1000 < 3 &&
                                          +item.distance / 1000 >= 1
                                        ? ['Less than 3 km', +item.distance]
                                        : +item.distance / 1000 < 5 &&
                                          +item.distance / 1000 >= 3
                                        ? ['Less than 5 km', +item.distance]
                                        : ['More than 5 km', +item.distance],
                            })
                        })
                        .map((item) => item.distance)
                        .reduce((acc: Record<string, number>, value) => {
                            return {
                                ...acc,
                                [value]: (acc[value] || 0) + 1,
                            }
                        }, {})!
                ),
                property: Object.entries(
                    data
                        ?.map((item) => item.propertyType)
                        .reduce((acc: Record<string, number>, value) => {
                            return {
                                ...acc,
                                [value.slice(0, 14)]:
                                    (acc[value.slice(0, 14)] || 0) + 1,
                            }
                        }, {})!
                ),
            })
    }, [data])

    useEffect(() => {
        data &&
            addToRecentSearches({
                id: uuidv4(),
                city: city,
                img: data ? data[0].cityPhoto : '',
                checkin: checkin,
                checkout: checkout,
                guests: +adults + +children,
            })
    }, [data])

    const nights = new Date(checkout).getDate() - new Date(checkin).getDate()
    // console.log(checkout, checkin)

    const adultsQt = Number(adults)
    const child = Number(children)

    const onFilterSelected = (filterValue: string, filter: string) => {
        const queryParams = {
            city: city,
            checkin: checkin,
            checkout: checkout,
            adults: adults,
            children: children,
            room: adults,
            params: room,
            star:
                filter === 'star' &&
                !filterChecked.find((filter) => filter === filterValue)
                    ? filterValue
                    : null,
            distance:
                filter === 'distance' &&
                !filterChecked.find((filter) => filter === filterValue)
                    ? filterValue
                    : null,
        }

        const queryString = qs.stringify(queryParams, { skipNulls: true })

        navigate(`/hotels?${queryString}`)
        filterChecked.find((filter) => filter === filterValue)
            ? setFilterChecked(
                  filterChecked.filter((filter) => filter !== filterValue)
              )
            : setFilterChecked((prev) => [...prev, filterValue])
    }

    // console.log(data)

    return (
        <>
            <MainNavbar />
            <Navbar />
            <div className={style.container}>
                <main className={style.wrapper}>
                    {/* Sidebar */}
                    <aside className={style.sidebar}>
                        {/* Search Container */}
                        <SidebarSearch />
                        {/* Filters Container */}
                        <div
                            className={
                                showFilters
                                    ? `${style.show}`
                                    : `${style.filtersContainer}`
                            }
                        >
                            <div className={style.filtersWrapper}>
                                <div className={style.filtersHeader}>
                                    <div onClick={() => setShowFilters(false)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
                                        </svg>
                                    </div>

                                    <span>Filters</span>
                                    <span>Clear</span>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Star Rating
                                    </h4>
                                    <div className={style.filterList}>
                                        {filters.star?.map((item) => (
                                            <div
                                                onClick={() =>
                                                    onFilterSelected(
                                                        String(item[0]),
                                                        'star'
                                                    )
                                                }
                                                key={item[0]}
                                                className={style.filterItem}
                                            >
                                                {filterChecked.find(
                                                    (element) =>
                                                        element === item[0]
                                                ) ? (
                                                    <FiCheckSquare />
                                                ) : (
                                                    <FiSquare />
                                                )}

                                                <div>
                                                    <span>{item[0]} stars</span>
                                                    <span>{item[1]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Cancellation Policy
                                    </h4>
                                    <div className={style.filterList}>
                                        {filters.cancellation?.map((item) => (
                                            <div
                                                onClick={() =>
                                                    onFilterSelected(
                                                        String(item[0]),
                                                        'cancellation'
                                                    )
                                                }
                                                key={item[0]}
                                                className={style.filterItem}
                                            >
                                                {filterChecked.find(
                                                    (element) =>
                                                        element === item[0]
                                                ) ? (
                                                    <FiCheckSquare />
                                                ) : (
                                                    <FiSquare />
                                                )}
                                                <div>
                                                    <span>{item[0]}</span>
                                                    <span>{item[1]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>Meals</h4>
                                    <div className={style.filterList}>
                                        {filters.meals?.map((item) => (
                                            <div
                                                onClick={() =>
                                                    onFilterSelected(
                                                        String(item[0]),
                                                        'meals'
                                                    )
                                                }
                                                key={item[0]}
                                                className={style.filterItem}
                                            >
                                                {filterChecked.find(
                                                    (element) =>
                                                        element === item[0]
                                                ) ? (
                                                    <FiCheckSquare />
                                                ) : (
                                                    <FiSquare />
                                                )}
                                                <div>
                                                    <span>{item[0]}</span>
                                                    <span>{item[1]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Distance from center of {city}
                                    </h4>
                                    <div className={style.filterList}>
                                        {filters.distance?.map((item) => (
                                            <div
                                                onClick={() =>
                                                    onFilterSelected(
                                                        String(
                                                            item[0].slice(15)
                                                        ),
                                                        'distance'
                                                    )
                                                }
                                                key={item[0]}
                                                className={style.filterItem}
                                            >
                                                {filterChecked.find(
                                                    (element) =>
                                                        element ===
                                                        item[0].slice(15)
                                                ) ? (
                                                    <FiCheckSquare />
                                                ) : (
                                                    <FiSquare />
                                                )}
                                                <div>
                                                    <span>
                                                        {item[0].slice(0, 14)}
                                                    </span>
                                                    <span>{item[1]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Property Type
                                    </h4>
                                    <div className={style.filterList}>
                                        {filters.property?.map((item) => (
                                            <div
                                                onClick={() =>
                                                    onFilterSelected(
                                                        String(item[0]),
                                                        'property'
                                                    )
                                                }
                                                key={item[0]}
                                                className={style.filterItem}
                                            >
                                                {filterChecked.find(
                                                    (element) =>
                                                        element === item[0]
                                                ) ? (
                                                    <FiCheckSquare />
                                                ) : (
                                                    <FiSquare />
                                                )}
                                                <div>
                                                    <span>{item[0]}s</span>
                                                    <span>{item[1]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <section className={style.hotelsContainer}>
                        <div className={style.hotelsWrapper}>
                            <div
                                style={{
                                    display: showFilters ? 'flex' : 'none',
                                }}
                                className={style.showFilters}
                            >
                                <div className={style.showFilter}>
                                    <div className={style.iconContainer}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M10.28 15.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.78.78 0 0 1-.24.16.73.73 0 0 1-.58 0 .78.78 0 0 1-.24-.16l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.75a.75.75 0 0 1 1.5 0v14.69l3.22-3.22a.75.75 0 0 1 1.06 0zm13.5-7.5l-4.5-4.5a.78.78 0 0 0-.28-.16.73.73 0 0 0-.58 0 .78.78 0 0 0-.24.16l-4.5 4.5a.75.75 0 1 0 1.06 1.06L18 5.56v14.69a.75.75 0 0 0 1.5 0V5.56l3.22 3.22a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"></path>
                                        </svg>
                                    </div>
                                    <span>Sort</span>
                                </div>
                                <div
                                    onClick={() => setShowFilters(true)}
                                    className={style.showFilter}
                                >
                                    <div className={style.iconContainer}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M.75 4.5h16.34a3.5 3.5 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM20.5 1.75a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm2.75 17.75H9.46a3.5 3.5 0 0 0-6.83 0H.75a.75.75 0 0 0 0 1.5h1.88a3.5 3.5 0 0 0 6.83 0h13.79a.75.75 0 0 0 0-1.5zm-17.2 2.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM23.25 11h-7.84a3.49 3.49 0 0 0-6.82 0H.75a.75.75 0 0 0 0 1.5h7.84a3.49 3.49 0 0 0 6.82 0h7.84a.75.75 0 0 0 0-1.5zM12 13.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path>
                                        </svg>
                                    </div>
                                    <span>Filter</span>
                                </div>
                            </div>

                            <div className={style.hotelsHeader}>
                                {city}: {data?.length} properties found
                            </div>
                            <div className={style.hotelsColumn}>
                                {data?.map((hotel) => (
                                    <div
                                        key={hotel._id}
                                        className={style.hotel}
                                    >
                                        <div
                                            className={
                                                style.hotelImageContainer
                                            }
                                        >
                                            <img
                                                src={hotel.photos[0]}
                                                alt={hotel.name}
                                            />
                                            <div
                                                onClick={() =>
                                                    onAddToWishlist(hotel._id)
                                                }
                                                className={style.saveContainer}
                                            >
                                                <svg
                                                    viewBox="0 0 128 128"
                                                    width="1.5em"
                                                    height="1.5em"
                                                    fill={
                                                        wishlist.includes(
                                                            hotel._id
                                                        )
                                                            ? 'red'
                                                            : 'transparent'
                                                    }
                                                    stroke="white"
                                                    strokeWidth={10}
                                                >
                                                    <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className={style.hotelInfoContainer}
                                        >
                                            <div className={style.infoHeader}>
                                                <div
                                                    className={style.hotelName}
                                                >
                                                    <h1>{hotel.name}</h1>
                                                    <span>
                                                        {+hotel.distance / 1000}
                                                        &nbsp;km from center
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        style.hotelRating
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            style.reviews
                                                        }
                                                    >
                                                        <h4>Very Good</h4>
                                                        <span>
                                                            4,575 reviews
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={style.rating}
                                                    >
                                                        8.0
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.infoBottom}>
                                                <div
                                                    className={style.bottomLeft}
                                                >
                                                    <div
                                                        className={
                                                            style.roomType
                                                        }
                                                    >
                                                        {
                                                            hotel.cheapestRoom
                                                                .roomType
                                                        }
                                                    </div>
                                                    <div
                                                        className={
                                                            style.bedInfo
                                                        }
                                                    >
                                                        {
                                                            hotel.cheapestRoom
                                                                .bedType
                                                        }
                                                    </div>
                                                    <div className={style.meal}>
                                                        {hotel.meals}
                                                    </div>
                                                    <div
                                                        className={
                                                            style.cancellation
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                hotel.cancellationPolicy
                                                            }
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={
                                                            style.additionalInfo
                                                        }
                                                    >
                                                        <p>
                                                            You can cancel
                                                            later, so lock in
                                                            this great price
                                                            today!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        style.bottomRight
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            style.stayInfo
                                                        }
                                                    >
                                                        {`${nights} ${
                                                            nights < 2 &&
                                                            nights > 0
                                                                ? 'night'
                                                                : 'nights'
                                                        },  ${adultsQt} ${
                                                            adultsQt < 2 &&
                                                            adultsQt > 0
                                                                ? 'adult'
                                                                : 'adults'
                                                        } ${
                                                            child > 0 ? ',' : ''
                                                        } ${
                                                            child > 0
                                                                ? child
                                                                : ''
                                                        }
                                                            ${
                                                                child < 2 &&
                                                                child > 0
                                                                    ? 'child'
                                                                    : child ===
                                                                      0
                                                                    ? ''
                                                                    : 'children'
                                                            }`}
                                                    </div>
                                                    <div
                                                        className={style.price}
                                                    >
                                                        {hotel.cheapestRoom
                                                            .lastPrice -
                                                            hotel.cheapestRoom
                                                                .actualPrice >
                                                            0 && (
                                                            <span
                                                                className={
                                                                    style.lastPrice
                                                                }
                                                            >
                                                                US$
                                                                {hotel
                                                                    .cheapestRoom
                                                                    .lastPrice *
                                                                    nights}
                                                            </span>
                                                        )}
                                                        US$
                                                        {hotel.cheapestRoom
                                                            .actualPrice *
                                                            nights}
                                                    </div>
                                                    <div
                                                        className={style.taxes}
                                                    >
                                                        +US$&nbsp;
                                                        {(
                                                            hotel.cheapestRoom
                                                                .actualPrice *
                                                            0.1
                                                        ).toFixed(2)}
                                                        &nbsp;taxes and charges
                                                    </div>
                                                    <div
                                                        className={
                                                            style.availibility
                                                        }
                                                    >
                                                        <a href="/">
                                                            See Availibility
                                                            <FiChevronRight />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}
