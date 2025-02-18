import { useState, useEffect, FC } from 'react'
import { useLocation } from 'react-router-dom'
import {
    Footer,
    MainNavbar,
    Navbar,
    Search,
    SelectedProperties,
    Subscribe,
} from '../../components'
import FeauturedProperty from '../../components/FeaturedProperty/FeauturedProperty'
import style from './SearchByPropertyType.module.css'
import { useAppSelector } from 'store/hooks/useSelector.hook'
import { RecentSearchesState } from 'store'

export const SearchByPropertyType: FC = () => {
    const location = useLocation()
    const [recentDestinations, setRecentDestinations] = useState<
        RecentSearchesState[]
    >([])
    const { recentSearches } = useAppSelector((state) => state.recenSearches)
    const typeOfProperty: string = location.search.substring(6)

    useEffect(() => {
        setRecentDestinations(
            recentSearches.slice(recentSearches.length - 4).reverse()
        )
    }, [recentSearches])

    console.log(recentDestinations)
    return (
        <>
            <MainNavbar />
            <Navbar />
            <div
                style={{
                    background: `url(${
                        typeOfProperty === 'Villa'
                            ? 'https://t-cf.bstatic.com/static/img/theme-index/bg_villas_new/b765353732f8ec1ccac1e0d62786c37dc1c80ae7.jpg'
                            : typeOfProperty === 'Apartment'
                            ? 'https://t-cf.bstatic.com/static/img/theme-index/bg_apartments_new/5062c4701202cd04226b76a5a70f8651ee9d94d8.jpg'
                            : typeOfProperty === 'Resort'
                            ? 'https://t-cf.bstatic.com/static/img/theme-index/bg_resorts_new/6e8294d75f648eab2cd2818f0a40854367e584a5.jpg'
                            : typeOfProperty === 'Hostel'
                            ? 'https://t-cf.bstatic.com/static/img/theme-index/bg_hostels_new/f99e059dea3a085a5aaffc35dbb941ca7495505b.jpg'
                            : typeOfProperty === 'Motel'
                            ? 'https://t-cf.bstatic.com/static/img/theme-index/bg_motels/d856398f47116cf15b08e830bfd63530539cd8e1.jpg'
                            : 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1'
                    }) no-repeat center center/cover`,
                }}
                className={style.searchContainer}
            >
                <div className={style.searchWrapper}>
                    <h1 className={style.propertyTitle}>
                        <span>{typeOfProperty}s</span>
                    </h1>
                    <h2 className={style.propertyDesc}>
                        {typeOfProperty === 'Villa'
                            ? "From luxuriously elegant to modern and minimalist – find a villa that you'll love!"
                            : typeOfProperty === 'Apartment'
                            ? "A home away from home – choose the apartment that's right for you."
                            : typeOfProperty === 'Resort'
                            ? 'Treat yourself! Your dream resort stay is just a few clicks away.'
                            : 'From budget hotels to luxury rooms and everything in between'}
                    </h2>
                    <Search />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.wrapper}>
                    {recentDestinations.length > 0 && (
                        <div className={style.recentsContainer}>
                            <p>Your recent searches</p>
                            <div className={style.recents}>
                                {recentDestinations.map((item) => (
                                    <div key={item.id} className={style.recent}>
                                        <div className={style.recentSearchInfo}>
                                            {item.city}&nbsp;
                                            <span>
                                                {`(${item.checkin
                                                    .toString()
                                                    .slice(5)} - ${item.checkout
                                                    .toString()
                                                    .slice(5)})`}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setRecentDestinations(
                                                    recentDestinations.filter(
                                                        (destinaton) =>
                                                            destinaton.id !==
                                                            item.id
                                                    )
                                                )
                                            }
                                            className={style.delete}
                                        >
                                            <svg
                                                fill="#6B6B6B"
                                                height="14"
                                                width="14"
                                                viewBox="0 0 128 128"
                                                role="presentation"
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm22.2 69.8a6 6 0 1 1-8.4 8.4L64 72.5 50.2 86.2a6 6 0 0 1-8.4-8.4L55.5 64 41.8 50.2a6 6 0 0 1 8.4-8.4L64 55.5l13.8-13.7a6 6 0 0 1 8.4 8.4L72.5 64z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <FeauturedProperty />
                    <SelectedProperties
                        property={typeOfProperty}
                        city={
                            typeOfProperty === 'Villa'
                                ? 'Myrtle Beach'
                                : typeOfProperty === 'Resort'
                                ? 'Destin'
                                : typeOfProperty === 'Hostel'
                                ? 'Dubai'
                                : typeOfProperty === 'Motel'
                                ? 'Ocean City'
                                : 'Eilat'
                        }
                        typeOfSearch={'love'}
                    />
                    <SelectedProperties
                        property={typeOfProperty}
                        city={
                            typeOfProperty === 'Villa'
                                ? 'Dubrovnik'
                                : typeOfProperty === 'Resort'
                                ? 'Myrtle Beach'
                                : typeOfProperty === 'Hostel'
                                ? 'Eilat'
                                : typeOfProperty === 'Motel'
                                ? 'Myrtle Beach'
                                : 'Myrtle Beach'
                        }
                        typeOfSearch={'perfect'}
                    />
                    <SelectedProperties
                        property={typeOfProperty}
                        city={
                            typeOfProperty === 'Villa'
                                ? 'Destin'
                                : typeOfProperty === 'Resort'
                                ? 'Gulf Shores'
                                : typeOfProperty === 'Hostel'
                                ? 'Amsterdam'
                                : typeOfProperty === 'Motel'
                                ? 'South Padre Island'
                                : 'Destin'
                        }
                        typeOfSearch={'selection'}
                    />
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}
