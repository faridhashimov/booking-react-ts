import style from './Footer.module.css'

const Footer = () => {
    const orderedCount = (str: any) =>
        Object.entries(
            [...str].reduce((a, v) => ((a[v] = a[v] + 1 || 1), a), {})
        )

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.listContainer}>
                    <ul className={style.list}>
                        <li className={style.listItem}>Countries</li>
                        <li className={style.listItem}>Regions</li>
                        <li className={style.listItem}>Cities</li>
                        <li className={style.listItem}>Districts</li>
                        <li className={style.listItem}>Airports</li>
                        <li className={style.listItem}>Hotels</li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.listItem}>Homes </li>
                        <li className={style.listItem}>Apartments </li>
                        <li className={style.listItem}>Resorts </li>
                        <li className={style.listItem}>Villas</li>
                        <li className={style.listItem}>Hostels</li>
                        <li className={style.listItem}>Guest houses</li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.listItem}>
                            Unique places to stay
                        </li>
                        <li className={style.listItem}>Reviews</li>
                        <li className={style.listItem}>
                            Unpacked: Travel articles
                        </li>
                        <li className={style.listItem}>Travel communities </li>
                        <li className={style.listItem}>
                            Seasonal and holiday deals
                        </li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.listItem}>Car rental </li>
                        <li className={style.listItem}>Flight Finder</li>
                        <li className={style.listItem}>
                            Restaurant reservations
                        </li>
                        <li className={style.listItem}>Travel Agents </li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.listItem}>Curtomer Service</li>
                        <li className={style.listItem}>Partner Help</li>
                        <li className={style.listItem}>Careers</li>
                        <li className={style.listItem}>Sustainability</li>
                        <li className={style.listItem}>Press center</li>
                        <li className={style.listItem}>
                            Safety Resource Center
                        </li>
                        <li className={style.listItem}>Investor relations</li>
                        <li className={style.listItem}>Terms & conditions</li>
                    </ul>
                </div>
                <div className={style.copyright}>
                    Copyright © 2022 Fredbooking.
                </div>
            </div>
        </div>
    )
}

export default Footer
