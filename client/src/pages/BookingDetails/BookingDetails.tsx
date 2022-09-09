import { MainNavbar } from '../../components'
import style from './BookingDetails.module.css'

const BookingDetails = () => {
    return (
        <>
            <MainNavbar />
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.detailsContainer}>
                        <header className={style.header}>
                            <div className={style.headerContainer}>
                                <div className={style.stageContainer}>
                                    <div className={style.stageNum}>
                                        <svg
                                            fill="currentColor"
                                            height="17"
                                            width="18"
                                            viewBox="0 0 128 128"
                                            role="presentation"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z"></path>
                                        </svg>
                                    </div>
                                    <span>Your Selection</span>
                                </div>
                                <div className={style.break}></div>
                                <div className={style.stageContainer}>
                                    <div className={style.stageNum}>2</div>
                                    <span>Your Details</span>
                                </div>
                                <div className={style.break}></div>
                                <div className={style.stageContainer}>
                                    <div className={style.stageNum}>3</div>
                                    <span>Final Setup</span>
                                </div>
                            </div>
                        </header>
                        <main className={style.infoBody}>
                            <aside className={style.bookingInfo}>
                                <div className={style.bookingDetails}>
                                    <h2>Your booking details</h2>
                                    <div className={style.datesContainer}>
                                        <div className={style.date}>
                                            <span>Check-in</span>
                                            <span>Thu, Sept 1, 2022</span>
                                        </div>
                                        <div className={style.date}>
                                            <span>Check-in</span>
                                            <span>Thu, Sept 1, 2022</span>
                                        </div>
                                    </div>
                                    <div className={style.totalStay}>
                                        <h4>Total length of stay:</h4>
                                        <span>9 nights</span>
                                    </div>
                                    <div className={style.selectedRoom}>
                                        <h4>You selected:</h4>
                                        <span>Double Room</span>
                                    </div>
                                </div>
                                <div className={style.priceDetails}>
                                    <header className={style.priceHeader}>
                                        <div
                                            className={
                                                style.priceHeaderContainer
                                            }
                                        >
                                            <div>
                                                <h4>Price</h4>
                                                <span>
                                                    (for 9 nights & all guests)
                                                </span>
                                            </div>
                                            <span>US$2,369</span>
                                        </div>
                                    </header>
                                    <main className={style.priceBody}>
                                        <h4>Excluded charges</h4>
                                        <div>
                                            <span>TAX</span>
                                            <span>US$349.43</span>
                                        </div>
                                    </main>
                                </div>
                            </aside>
                            <section className={style.mainInfo}>
                                <div className={style.hotelInfoContainer}>
                                    <div className={style.hotelImageContainer}>
                                        <img
                                            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/123731236.webp?k=4020202334ed9cf56d3d5b16df3d0f92a0ce1620a5345d1ab406924c13128cb2&o="
                                            alt=""
                                        />
                                    </div>
                                    <div className={style.infoContainer}>
                                        <div className={style.propertyType}>
                                            <span>Hotel</span>
                                        </div>
                                        <h1 className={style.propertyName}>
                                            MOXY NYC Times Square
                                        </h1>
                                        <div className={style.propertyAdress}>
                                            <address>
                                                485 7th Avenue, New York, NY
                                                10018, United States of America
                                            </address>
                                            <span>
                                                This property has an excellent
                                                location. Guests have rated it
                                                9.3!
                                            </span>
                                        </div>
                                        <div className={style.propertyRating}>
                                            <div className={style.ratingBadge}>
                                                8.1
                                            </div>
                                            <span className={style.reviewScore}>
                                                Very Good
                                            </span>
                                            <span className={style.reviews}>
                                                10,099 reviews
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.goodToKnow}>
                                    <h2>Good to know:</h2>
                                    <div className={style.goodToKnowItem}>
                                        <svg
                                            fill="#008009"
                                            height="20"
                                            role="presentation"
                                            width="20"
                                            viewBox="0 0 128 128"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
                                        </svg>
                                        <p>
                                            Free cancellation until 11:59 PM on
                                            August 30, 2022
                                        </p>
                                    </div>
                                    <div className={style.goodToKnowItem}>
                                        <svg
                                            fill="#008009"
                                            height="20"
                                            width="20"
                                            role="presentation"
                                            viewBox="0 0 128 128"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
                                        </svg>
                                        <p>
                                            No payment needed today. You'll pay
                                            when you stay.
                                        </p>
                                    </div>
                                </div>

                                <div className={style.userDetails}>
                                    <header>
                                        <div className={style.headerLeft}>
                                            <h2>Enter your details</h2>
                                            <div>
                                                Almost done! Just fill in
                                                the&nbsp;
                                                <b className={style.fill}>*</b>
                                                &nbsp;required info
                                            </div>
                                        </div>
                                    </header>
                                    <main>
                                        <form className={style.userForm}>
                                            <div
                                                className={
                                                    style.inputsContainer
                                                }
                                            >
                                                <div
                                                    className={
                                                        style.inputContainer
                                                    }
                                                >
                                                    <label htmlFor="firstname">
                                                        First Name&nbsp;
                                                        <b
                                                            className={
                                                                style.fill
                                                            }
                                                        >
                                                            *
                                                        </b>
                                                    </label>
                                                    <input
                                                        id="firstname"
                                                        type="text"
                                                        value="Farid"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        style.inputContainer
                                                    }
                                                >
                                                    <label htmlFor="lastname">
                                                        Last Name&nbsp;
                                                        <b
                                                            className={
                                                                style.fill
                                                            }
                                                        >
                                                            *
                                                        </b>
                                                    </label>
                                                    <input
                                                        id="lastname"
                                                        type="text"
                                                        value="Hashimov"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style.inputsContainer
                                                }
                                            >
                                                <div
                                                    className={
                                                        style.inputContainer
                                                    }
                                                >
                                                    <label htmlFor="email">
                                                        Email Address&nbsp;
                                                        <b
                                                            className={
                                                                style.fill
                                                            }
                                                        >
                                                            *
                                                        </b>
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value="farid@gmail.com"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        style.inputContainer
                                                    }
                                                >
                                                    <label htmlFor="confirmemail">
                                                        Confirm Email
                                                        Adress&nbsp;
                                                        <b
                                                            className={
                                                                style.fill
                                                            }
                                                        >
                                                            *
                                                        </b>
                                                    </label>
                                                    <input
                                                        id="confirmemail"
                                                        type="email"
                                                        value="farid@gmail.com"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style.inputsContainer
                                                }
                                            >
                                                <div
                                                    className={
                                                        style.inputContainer
                                                    }
                                                >
                                                    <label htmlFor="adress">
                                                        Address&nbsp;
                                                        <b
                                                            className={
                                                                style.fill
                                                            }
                                                        >
                                                            *
                                                        </b>
                                                    </label>
                                                    <input
                                                        id="adress"
                                                        type="text"
                                                        autoComplete="off"
                                                        // value="farid@gmail.com"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        style.inputContainer
                                                    }
                                                >
                                                    <label htmlFor="City">
                                                        City&nbsp;
                                                        <b
                                                            className={
                                                                style.fill
                                                            }
                                                        >
                                                            *
                                                        </b>
                                                    </label>
                                                    <input
                                                        id="city"
                                                        type="text"
                                                        autoComplete="off"
                                                        // value="farid@gmail.com"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </main>
                                </div>

                                <div className={style.submitInfo}>
                                    <a href='/'>
                                        Next: Final details
                                        <svg
                                            height="24"
                                            role="presentation"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div>
                    <p>
                        Copyright © 1996–2022 Fredbooking.com. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BookingDetails
