import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { FiCalendar, FiSearch, FiUser } from 'react-icons/fi'
import { IDateRange, IGuests } from '../../types'
import SetGuests from '../SetGuests/SetGuests'
import style from './SidebarSearch.module.css'

const SidebarSearch = () => {
    const [destination, setDestination] = useState<string>('New York')
    const [openDate, setOpenDate] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)

    const [guests, setGuests] = useState<IGuests>({
        adults: 2,
        children: 0,
        room: 1,
    })

    const handleOption = (name: keyof typeof guests, operation: string) => {
        setGuests((prev) => {
            return {
                ...prev,
                [name]:
                    operation === 'inc' ? guests[name] + 1 : guests[name] - 1,
            }
        })
    }

    const [dates, setDates] = useState<IDateRange[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const room = (q: number) => {
        if (q >= 10) {
            return `ro..`
        } else if (guests.room === 1) {
            return `room`
        } else {
            return `rooms`
        }
    }

    return (
        <div className={style.searchContainer}>
            <form onSubmit={handleSubmit} className={style.searchWrapper}>
                <h3 className={style.formTitle}>Search</h3>
                <div className={style.inputContainer}>
                    <span className={style.inputLabel}>Destination name:</span>
                    <div className={style.inputWrapper}>
                        <div className={style.iconContainer}>
                            <FiSearch />
                        </div>
                        <input
                            onChange={(e) => setDestination(e.target.value)}
                            required
                            type="text"
                            value={destination}
                        />
                    </div>
                </div>
                <div className={style.inputContainer}>
                    <div>
                        <span className={style.inputLabel}>
                            Check-in and Check-out date:
                        </span>
                        <div
                            onClick={() => {
                                setOpenDate(!openDate)
                                setOpenGuests(false)
                            }}
                            className={style.inputWrapper}
                        >
                            <div className={style.iconContainer}>
                                <FiCalendar />
                            </div>
                            <div>
                                <span>
                                    {`${format(
                                        dates[0].startDate,
                                        'eee, MMM d'
                                    )} - ${format(
                                        dates[0].endDate,
                                        'eee, MMM d'
                                    )}`}
                                    {/* Fri, Aug 5 - Fri, Aug 5 */}
                                </span>
                            </div>
                        </div>
                    </div>
                    {openDate && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item: any) => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className={style.datePick}
                            minDate={new Date()}
                        />
                    )}
                </div>
                <div className={style.inputContainer}>
                    <div>
                        <span className={style.inputLabel}>17-night stay:</span>
                        <div
                            onClick={() => setOpenGuests(!openGuests)}
                            className={style.inputWrapper}
                        >
                            <div className={style.iconContainer}>
                                <FiUser />
                            </div>
                            <div>
                                <span>
                                    {`${guests.adults} ${
                                        guests.adults < 2 ? 'adult' : 'adults'
                                    }`}
                                </span>{' '}
                                · <span>{guests.children} children</span> ·{' '}
                                <span>{`${guests.room} ${room(
                                    guests.adults +
                                        guests.children +
                                        guests.room
                                )}`}</span>
                            </div>
                        </div>
                    </div>
                    {openGuests && (
                        <SetGuests
                            guests={guests}
                            handleOption={handleOption}
                        />
                    )}
                </div>
                <button type="submit" className={style.searchBtn}>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SidebarSearch
