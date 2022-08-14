import { IoCheckmarkOutline } from 'react-icons/io5'
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
                                        <IoCheckmarkOutline />
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
                            </aside>
                            <section className={style.mainInfo}>
                                <div className={style.hotelInfoContainer}>
                                    <div className={style.hotelImageContainer}>
                                        <img
                                            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/123731236.webp?k=4020202334ed9cf56d3d5b16df3d0f92a0ce1620a5345d1ab406924c13128cb2&o="
                                            alt=""
                                        />
                                    </div>
                                    <div className={style.infoContainer}></div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingDetails
