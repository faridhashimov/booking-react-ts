import {
    Availibility,
    Faq,
    Footer,
    HotelDescription,
    ImagesGrid,
    MainNavbar,
    Navbar,
    Questions,
    Reviews,
    SidebarSearch,
    Subscribe,
} from '../../components'
import { ImLocation } from 'react-icons/im'
import style from './Hotel.module.css'
import { FaHeart } from 'react-icons/fa'
import { faq } from '../../data'

let text = ` This Art-Deco inspired high-rise hotel offers a
midtown location and 24-hour dining. Times
Square is less than 0.6 mi from the property and
Pen Station is 162 m away. The rooms at The New
Yorker, A Wyndham Hotel are equipped with
complimentary WiFi and flat-screen TVs. Some
suites and rooms offer views of the Empire State
Building or the Hudson River as well. Take
advantage of the concierge services at The New
Yorker, A Wyndham Hotel for assistance with
Broadway tickets, guided tours, restaurant
reservations are more. A gift shop, business
center and a fitness center are available too.
Herald Square with Macy’s flagship store and
other shopping destinations is 322 m away. This
is our guests' favorite part of New York,
according to independent reviews. Couples in
particular like the location – they rated it 9.3
for a two-person trip.`

const Hotel = () => {
    return (
        <>
            <MainNavbar />
            <Navbar />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <header className={style.hotelHeader}>
                        <aside className={style.sidebar}>
                            {/* <SidebarSearch /> */}
                        </aside>
                        <section className={style.imagesContainer}>
                            <div className={style.imagesWrapper}>
                                <header className={style.imagesHeader}>
                                    <div className={style.imagesHeaderInfo}>
                                        <h3>Hotel Belleclaire Central Park</h3>
                                        <p>
                                            <ImLocation />
                                            <span>
                                                2175 Broadway , Upper West Side,
                                                New York, NY 10024, United
                                                States of America – Subway
                                                Access
                                            </span>
                                        </p>
                                    </div>
                                    <div className={style.likeOrReserve}>
                                        <div className={style.like}>
                                            <svg
                                                fill="#0071C2"
                                                height="16"
                                                width="16"
                                                viewBox="0 0 128 128"
                                            >
                                                <path d="M119.5 40.3a29 29 0 0 0-22.8-23.7 33.8 33.8 0 0 0-32.7 13 33.7 33.7 0 0 0-32.7-13A29 29 0 0 0 8.5 40.3c-1.3 7.2-.6 18.8 9.4 33.3A140 140 0 0 0 62 111.5a3.7 3.7 0 0 0 4 0c20.2-12 35-24.8 44.1-38 10-14.4 10.7-26 9.5-33.2zm-55.5 63c-33-20.1-50.8-43-47.7-61.6A20.7 20.7 0 0 1 33 24.3a22.3 22.3 0 0 1 4.5-.4c8.8 0 17.3 5.2 23.2 14.6a4 4 0 0 0 3.4 1.8 4 4 0 0 0 3.4-1.8c6-9.4 14.4-14.6 23.2-14.6a22.3 22.3 0 0 1 4.5.5 20.7 20.7 0 0 1 16.6 17.2c3 18.6-14.8 41.6-47.8 61.7z"></path>
                                            </svg>
                                        </div>
                                        <a
                                            href="#availibility"
                                            className={style.headerReserve}
                                        >
                                            Reserve
                                        </a>
                                    </div>
                                </header>
                                <div className={style.imageGridWrapper}>
                                    <ImagesGrid />
                                </div>
                            </div>
                        </section>
                    </header>
                    <section className={style.facilitiesContainer}>
                        <div className={style.facilitiesWrapper}>
                            <div className={style.facility}>
                                <div className={style.facilityName}>View</div>
                                <div className={style.facilityName}>
                                    Pet friendly
                                </div>
                                <div className={style.facilityName}>
                                    Free WiFi
                                </div>
                                <div className={style.facilityName}>
                                    Air conditioning
                                </div>
                                <div className={style.facilityName}>
                                    Private Bathroom
                                </div>
                                <div className={style.facilityName}>
                                    24-hour front desk
                                </div>
                                <div className={style.facilityName}>
                                    Key card access
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={style.hotelInfo}>
                        <HotelDescription desc={text} hotel={'New York'} />
                        <div className={style.bookContainer}>
                            <div className={style.book}>
                                <h3>Property Highlights</h3>
                                <h4>Perfect for a 17-night stay!</h4>
                                <div>
                                    <FaHeart />
                                    <span>
                                        Located in New York, this hotel
                                        <br /> has an excellent location score
                                        of 9.3
                                    </span>
                                </div>
                                <a
                                    className={style.reserveBtn}
                                    href="#availibility"
                                >
                                    Reserve
                                </a>
                            </div>
                        </div>
                    </section>

                    <Availibility />
                    <section className={style.reviewsContainer}>
                        <header className={style.reviewsHeader}>
                            <h2>Guest reviews</h2>
                            <div className={style.reviewScore}>
                                <div className={style.rating}>8.0</div>
                                <span className={style.rateName}>Good</span>
                                <span className={style.reviewCount}>
                                    7,997 reviews
                                </span>
                            </div>
                        </header>
                        <main className={style.reviewCards}>
                            <h3>See what guests loved the most:</h3>
                            <Reviews />
                        </main>
                    </section>
                    <section className={style.qnaContainer}>
                        <header className={style.qnaHeader}>
                            <h2>Property questions and answers</h2>
                            <p>
                                Browse questions from guests for anything extra
                                you want to know about the property <br />
                                <span>
                                    The property usually replies within a few
                                    days
                                </span>
                            </p>
                        </header>
                        <main className={style.qnaHeaderCards}>
                            <Questions />
                        </main>
                    </section>
                    <Faq faq={faq} />
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default Hotel
