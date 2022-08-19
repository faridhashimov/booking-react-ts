import { MainNavbar, Navbar, Search, SidebarSearch } from '../../components'
import style from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={style.root}>
                <MainNavbar />
                <Navbar />
                <main className={style.container}>
                    <div>
                        <h1 className={style.title}>Find your next stay</h1>
                        <p className={style.desc}>
                            Search deals on hotels, homes, and much more...
                        </p>
                    </div>
                </main>
            </div>
            <div className={style.searchContainer}>
                <div className={style.wrapper}>
                    <Search />
                </div>
            </div>
            <div className={style.mobileSearch}>
                <SidebarSearch />
            </div>
        </>
    )
}

export default Header
