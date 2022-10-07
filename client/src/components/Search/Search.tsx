import React, { useState } from 'react'
import style from './Search.module.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import {
    FaBed,
    FaChevronDown,
    FaChevronUp,
    FaRegCalendarAlt,
    FaUserAlt,
} from 'react-icons/fa'
import { format } from 'date-fns'
import { IDateRange, IGuests } from '../../types'
import { SetGuests } from '../../components'
import { useNavigate } from 'react-router-dom'
// const { DateRange } = require('react-date-range')

const Search = () => {
    const [destination, setDestination] = useState<string>('')
    const [openDate, setOpenDate] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)
    const navigate = useNavigate()

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
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    const [dates, setDates] = useState<IDateRange[]>([
        {
            startDate: new Date(),
            endDate: tomorrow,
            key: 'selection',
        },
    ])

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        navigate(
            `/hotels?city=${destination}&checkin=${format(
                dates[0].startDate,
                'eee, MMM d'
            )}&checkout=${format(dates[0].endDate, 'eee, MMM d')}&adults=${
                guests.adults
            }&children=${guests.children}&room=${guests.room}`
        )
    }

    return (
        <div className={style.container}>
            <form onSubmit={onFormSubmit} className={style.searchForm}>
                <div className={style.destinationContainer}>
                    <label
                        className={style.destinationLabel}
                        htmlFor="destination"
                    >
                        <FaBed fontSize={20} color="#BDBDBD" />
                    </label>
                    <input
                        onChange={(e) => setDestination(e.target.value)}
                        id="destination"
                        className={style.destinationInput}
                        type="text"
                        value={destination}
                        required
                        placeholder="Where are you going?"
                    />
                    {destination !== '' && (
                        <div
                            onClick={() => setDestination('')}
                            className={style.clearBtn}
                        >
                            <svg
                                aria-hidden="true"
                                fill="#333333"
                                focusable="false"
                                height="20"
                                role="presentation"
                                width="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
                            </svg>
                        </div>
                    )}
                </div>
                <div className={style.datePickContainer}>
                    <div
                        className={style.infoPickContainer}
                        onClick={() => {
                            setOpenDate(!openDate)
                            setOpenGuests(false)
                        }}
                    >
                        <div className={style.iconContainer}>
                            <FaRegCalendarAlt fontSize={20} color="#BDBDBD" />
                        </div>
                        <div>
                            <span>{`${format(
                                dates[0].startDate,
                                'eee, MMM d'
                            )} - ${format(
                                dates[0].endDate,
                                'eee, MMM d'
                            )}`}</span>
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
                <div className={style.guestsContainer}>
                    <div
                        onClick={() => {
                            setOpenGuests(!openGuests)
                            setOpenDate(false)
                        }}
                        className={style.infoPickContainer}
                    >
                        <div className={style.iconContainer}>
                            <FaUserAlt fontSize={18} color="#BDBDBD" />
                        </div>
                        <div className={style.guests}>
                            <span className={style.adult}>
                                {guests.adults} adults
                            </span>{' '}
                            ·{' '}
                            <span className={style.children}>
                                {guests.children} children
                            </span>{' '}
                            ·{' '}
                            <span className={style.room}>
                                {guests.room} room
                            </span>
                            <div className={style.gusestsToggleIcon}>
                                <FaChevronUp fontSize={9} color="#0077CC" />
                                <FaChevronDown fontSize={9} color="#0077CC" />
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

export default Search
