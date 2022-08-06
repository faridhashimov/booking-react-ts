import { useState } from 'react'
import { FaBed, FaCarSide, FaPlane, FaTaxi } from 'react-icons/fa'

import style from './Navbar.module.css'

const Navbar = () => {
    const [category, setCategory] = useState('Stays')

    return (
        <div className={style.root}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.categories}>
                        <div
                            onClick={() => setCategory('Stays')}
                            className={
                                category === 'Stays'
                                    ? `${style.btn} ${style.selected}`
                                    : style.btn
                            }
                        >
                            <FaBed size={20} />
                            <span className={style.categoryName}>Stays</span>
                        </div>
                        <div
                            onClick={() => setCategory('Flights')}
                            className={
                                category === 'Flights'
                                    ? `${style.btn} ${style.selected}`
                                    : style.btn
                            }
                        >
                            <FaPlane size={20} />
                            <span className={style.categoryName}>Flights</span>
                        </div>
                        <div
                            onClick={() => setCategory('Car rentals')}
                            className={
                                category === 'Car rentals'
                                    ? `${style.btn} ${style.selected}`
                                    : style.btn
                            }
                        >
                            <FaCarSide size={20} />
                            <span className={style.categoryName}>
                                Car rentals
                            </span>
                        </div>
                        <div
                            onClick={() => setCategory('Airport taxis')}
                            className={
                                category === 'Airport taxis'
                                    ? `${style.btn} ${style.selected}`
                                    : style.btn
                            }
                        >
                            <FaTaxi size={20} />
                            <span className={style.categoryName}>
                                Airport taxis
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
