import {
    Footer,
    MainNavbar,
    Navbar,
    Subscribe,
    SidebarSearch,
} from '../../components'
import { FiCheckSquare, FiChevronRight, FiSquare } from 'react-icons/fi'
import style from './Hotels.module.css'
import { useState } from 'react'

const Hotels = () => {
    const [wishlist, setWishlist] = useState<string[]>([])
    const [showFilters, setShowFilters] = useState<boolean>(false)

    const onAddToWishlist = (id: string) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter((i) => i !== id))
        } else {
            setWishlist((prev) => [...prev, id])
        }
    }
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
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>1 star</span>
                                                <span>85</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiCheckSquare />
                                            <div>
                                                <span>1 star</span>
                                                <span>85</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>1 star</span>
                                                <span>85</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Cancellation Policy
                                    </h4>
                                    <div className={style.filterList}>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>Free cancellation</span>
                                                <span>340</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiCheckSquare />
                                            <div>
                                                <span>No prepayment</span>
                                                <span>273</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>Meals</h4>
                                    <div className={style.filterList}>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>Breakfast Included</span>
                                                <span>340</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiCheckSquare />
                                            <div>
                                                <span>Kitchen facilities</span>
                                                <span>273</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Distance from center of the city
                                    </h4>
                                    <div className={style.filterList}>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>Less than 1 km</span>
                                                <span>340</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiCheckSquare />
                                            <div>
                                                <span>Less than 3 km</span>
                                                <span>273</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiCheckSquare />
                                            <div>
                                                <span>Less than 5 km</span>
                                                <span>273</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.filter}>
                                    <h4 className={style.filterName}>
                                        Property Type
                                    </h4>
                                    <div className={style.filterList}>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>Hotels</span>
                                                <span>85</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiCheckSquare />
                                            <div>
                                                <span>Apartments</span>
                                                <span>85</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>Hostels</span>
                                                <span>85</span>
                                            </div>
                                        </div>
                                        <div className={style.filterItem}>
                                            <FiSquare />
                                            <div>
                                                <span>Motels</span>
                                                <span>85</span>
                                            </div>
                                        </div>
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
                                New York: 423 properties found
                            </div>
                            <div className={style.hotelsColumn}>
                                <div className={style.hotel}>
                                    <div className={style.hotelImageContainer}>
                                        <img
                                            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/207599654.webp?k=cd805bf4a2b3393e6a45bdcb9709b99eeb8316174e8101e12273e2519edd5df8&o=&s=1"
                                            alt=""
                                        />
                                        <div
                                            onClick={() => onAddToWishlist('1')}
                                            className={style.saveContainer}
                                        >
                                            <svg
                                                viewBox="0 0 128 128"
                                                width="1.5em"
                                                height="1.5em"
                                                fill={
                                                    wishlist.includes('1')
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
                                    <div className={style.hotelInfoContainer}>
                                        <div className={style.infoHeader}>
                                            <div className={style.hotelName}>
                                                <h1>
                                                    SpringHill Suites by
                                                    Marriott New York
                                                    Manhattan/Times Square South
                                                </h1>
                                                <span>0.6 km from center</span>
                                            </div>
                                            <div className={style.hotelRating}>
                                                <div className={style.reviews}>
                                                    <h4>Very Good</h4>
                                                    <span>4,575 reviews</span>
                                                </div>
                                                <div className={style.rating}>
                                                    8.0
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.infoBottom}>
                                            <div className={style.bottomLeft}>
                                                <div className={style.roomType}>
                                                    King Room
                                                </div>
                                                <div className={style.bedInfo}>
                                                    1 king bed
                                                </div>
                                                <div className={style.meal}>
                                                    Breakfast included
                                                </div>
                                                <div
                                                    className={
                                                        style.cancellation
                                                    }
                                                >
                                                    <span>
                                                        Free cancellation
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        style.additionalInfo
                                                    }
                                                >
                                                    <p>
                                                        You can cancel later, so
                                                        lock in this great price
                                                        today!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={style.bottomRight}>
                                                <span className={style.price}>
                                                    US$1,529
                                                </span>
                                                <div className={style.taxes}>
                                                    +US$529 taxes and charges
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
                                <div className={style.hotel}>
                                    <div className={style.hotelImageContainer}>
                                        <img
                                            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/349913490.webp?k=3f39d6c6e54072cc29e7ec98723a050246ca71721dc28679f32b4c8cf18bf449&o=&s=1"
                                            alt=""
                                        />
                                        <div
                                            onClick={() => onAddToWishlist('2')}
                                            className={style.saveContainer}
                                        >
                                            <svg
                                                viewBox="0 0 128 128"
                                                width="1.5em"
                                                height="1.5em"
                                                fill={
                                                    wishlist.includes('2')
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
                                    <div className={style.hotelInfoContainer}>
                                        <div className={style.infoHeader}>
                                            <div className={style.hotelName}>
                                                <h1>
                                                    Courtyard by Marriott New
                                                    York Manhattan/Central Park
                                                </h1>
                                                <span>0.6 km from center</span>
                                            </div>
                                            <div className={style.hotelRating}>
                                                <div className={style.reviews}>
                                                    <h4>Very Good</h4>
                                                    <span>4,575 reviews</span>
                                                </div>
                                                <div className={style.rating}>
                                                    8.0
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.infoBottom}>
                                            <div className={style.bottomLeft}>
                                                <div className={style.roomType}>
                                                    King Room
                                                </div>
                                                <div className={style.bedInfo}>
                                                    1 king bed
                                                </div>
                                                <div className={style.meal}>
                                                    Breakfast included
                                                </div>
                                                <div
                                                    className={
                                                        style.cancellation
                                                    }
                                                >
                                                    Free cancellation
                                                </div>
                                                <div
                                                    className={
                                                        style.additionalInfo
                                                    }
                                                >
                                                    <p>
                                                        You can cancel later, so
                                                        lock in this great price
                                                        today!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={style.bottomRight}>
                                                <span className={style.price}>
                                                    US$1,529
                                                </span>
                                                <div className={style.taxes}>
                                                    +US$529 taxes and charges
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

export default Hotels