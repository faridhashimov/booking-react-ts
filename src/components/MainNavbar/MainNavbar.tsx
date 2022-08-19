import style from './MainNavbar.module.css'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'

const MainNavbar = () => {
    return (
        <div className={style.root}>
            <div className={style.container}>
                <div className={style.logoContainer}>
                    <Link to="/" className={style.logo}>
                        Fredbooking.com
                    </Link>
                </div>
                <Link to='/register' className={style.mobileLogin}>
                    <BiUserCircle className={style.loginUser} />
                </Link>
                <div className={style.navContainer}>
                    <div className={style.currencyContainer}>
                        <span className={style.currency}>RUB</span>
                    </div>
                    <div className={style.langContainer}>
                        <img
                            className={style.langImg}
                            src="https://t-cf.bstatic.com/static/img/flags/new/48-squared/us/fa2b2a0e643c840152ba856a8bb081c7ded40efa.png"
                            alt="flag"
                        />
                    </div>

                    <button className={style.listProperty}>
                        List your property
                    </button>
                    <Link to="/register" className={style.authBtn}>
                        Register
                    </Link>
                    <Link to="/login" className={style.authBtn}>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar
