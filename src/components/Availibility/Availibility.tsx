import style from './Availibility.module.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoBedSharp, IoCheckmarkOutline } from 'react-icons/io5'

const Availibility = () => {
    return (
        <div id="availibility" className={style.aContainer}>
            <h2 className={style.aTitle}>Availability</h2>
            <div className={style.tableWrapper}>
                <table cellSpacing={0} className={style.aTable}>
                    <thead>
                        <tr>
                            <th>Room Type</th>
                            <th>Sleeps</th>
                            <th>Price for 9 nights</th>
                            <th>Your Choices</th>
                            <th>Select Rooms</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={style.roomTypeTitle}>
                                    <h4>Double Room</h4>
                                    <span>
                                        1 full bed <IoBedSharp />
                                    </span>
                                </div>
                                <div className={style.roomFacilities}>
                                    <span>
                                        <IoCheckmarkOutline /> Free toiletries
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Safe
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Streaming service (like Netflix)
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Toilet
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Bathtub or shower
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Hardwood or parquet floors
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Towels
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Linens
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Socket near the bed
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Desk
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        TV
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Telephone
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Satellite channels
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className={style.sleepsIcons}>
                                    {[...Array(2)].map((_, i) => (
                                        <span key={i}>
                                            <BsFillPersonFill />
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <div className={style.roomTypePrice}>
                                    <h4>US$2,369</h4>
                                    <span>+US$691 taxes and charges</span>
                                </div>
                            </td>
                            <td>
                                <div className={style.roomConditions}>
                                    <div className={style.conditionContainer}>
                                        <IoCheckmarkOutline />
                                        <div className={style.conditionItem}>
                                            <span>Free cancellation</span>
                                        </div>
                                    </div>
                                    <div className={style.conditionContainer}>
                                        <IoCheckmarkOutline />
                                        <div className={style.conditionItem}>
                                            <span>NO PREPAYMENT NEEDED</span> –
                                            pay at the property
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <select name="" id="">
                                    <option value="">0 </option>
                                    <option value="">
                                        1 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                    <option value="">
                                        2 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                    <option value="">
                                        3 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                    <option value="">
                                        4 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                </select>
                            </td>
                            <td className={style.reserveBtnCell}>
                                <div className={style.roomReserve}>
                                    <a href="/">I'll reserve</a>
                                    <ul>
                                        <li>It only takes 2 minutes</li>
                                        <li>Confirmation is immediate</li>
                                        <li>No booking or credit card fees!</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={style.roomTypeTitle}>
                                    <h4>King Room</h4>
                                    <span>
                                        1 king bed <IoBedSharp />
                                    </span>
                                </div>
                                <div className={style.roomFacilities}>
                                    <span>
                                        <IoCheckmarkOutline /> Free toiletries
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Safe
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Streaming service (like Netflix)
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Toilet
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Bathtub or shower
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Hardwood or parquet floors
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Towels
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Linens
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Socket near the bed
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Desk
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        TV
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Telephone
                                    </span>
                                    <span>
                                        <IoCheckmarkOutline />
                                        Satellite channels
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className={style.sleepsIcons}>
                                    {[...Array(2)].map((_, i) => (
                                        <span key={i}>
                                            <BsFillPersonFill />
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <div className={style.roomTypePrice}>
                                    <h4>US$2,369</h4>
                                    <span>+US$691 taxes and charges</span>
                                </div>
                            </td>
                            <td>
                                <div className={style.roomConditions}>
                                    <div className={style.conditionContainer}>
                                        <IoCheckmarkOutline />
                                        <div className={style.conditionItem}>
                                            <span>Free cancellation</span>
                                        </div>
                                    </div>
                                    <div className={style.conditionContainer}>
                                        <IoCheckmarkOutline />
                                        <div className={style.conditionItem}>
                                            <span>NO PREPAYMENT NEEDED</span> –
                                            pay at the property
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <select name="" id="">
                                    <option value="">0</option>
                                    <option value="">
                                        1 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                    <option value="">
                                        2 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                    <option value="">
                                        3 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                    <option value="">
                                        4 &nbsp; &nbsp;&nbsp;&nbsp; (US$2369)
                                    </option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Availibility
