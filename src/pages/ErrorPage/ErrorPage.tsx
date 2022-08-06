import style from './ErrorPage.module.css'
import { MainNavbar, Navbar } from '../../components'

const ErrorPage = () => {
    return (
        <>
            <MainNavbar />
            <Navbar />
            <div>
                <div>
                    <h1>Page Not Found</h1>
                    <p>It happens! Let’s get you back on track.</p>{' '}
                </div>
            </div>
        </>
    )
}

export default ErrorPage
