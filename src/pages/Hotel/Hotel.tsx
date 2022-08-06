import {
    Footer,
    MainNavbar,
    Navbar,
    SidebarSearch,
    Subscribe,
} from '../../components'
import style from './Hotel.module.css'

const Hotel = () => {
    return (
        <>
            <MainNavbar />
            <Navbar />
            <div className={style.container}>
                <main className={style.wrapper}>
                    {/* Sidebar */}
                    <aside className={style.sidebar}>
                        <SidebarSearch />
                    </aside>
                    <section className={style.imagesContainer}>
                        <div className={style.imagesWrapper}>
                            <header className={style.imagesHeader}>
                                <div className={style.imagesHeaderInfo}>
                                    <h3>Hotel Belleclaire Central Park</h3>
                                    <p>
                                        2175 Broadway , Upper West Side, New
                                        York, NY 10024, United States of America
                                        – Subway Access
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
                                    <a href="/" className={style.headerReserve}>
                                        Reserve
                                    </a>
                                </div>
                            </header>
                        </div>
                    </section>
                </main>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default Hotel
