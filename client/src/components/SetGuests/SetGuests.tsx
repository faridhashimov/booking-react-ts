import { IGuests } from '../../types'
import style from './SetGuests.module.css'

const SetGuests = ({
    guests,
    handleOption,
}: {
    guests: IGuests
    handleOption: (name: keyof typeof guests, operation: string) => void
}) => {
    return (
        <div className={style.guestsInfo}>
            <div className={style.guestdInfoWrapper}>
                <div className={style.setGuestsInfoContainer}>
                    <span className={style.guestsTitle}>Adults</span>
                    <div className={style.guestsSetBtnsContainer}>
                        <button
                            type="button"
                            disabled={guests.adults > 1 ? false : true}
                            onClick={() => handleOption('adults', 'dec')}
                            className={style.guestsSetBtn}
                        >
                            -
                        </button>
                        <span className={style.guestsQt}>{guests.adults}</span>
                        <button
                            type="button"
                            disabled={guests.children < 30 ? false : true}
                            onClick={() => handleOption('adults', 'inc')}
                            className={style.guestsSetBtn}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={style.setGuestsInfoContainer}>
                    <span className={style.guestsTitle}>Children</span>
                    <div className={style.guestsSetBtnsContainer}>
                        <button
                            type="button"
                            disabled={guests.children > 0 ? false : true}
                            onClick={() => handleOption('children', 'dec')}
                            className={style.guestsSetBtn}
                        >
                            -
                        </button>
                        <span className={style.guestsQt}>
                            {guests.children}
                        </span>
                        <button
                            type="button"
                            disabled={guests.children < 10 ? false : true}
                            onClick={() => handleOption('children', 'inc')}
                            className={style.guestsSetBtn}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={style.setGuestsInfoContainer}>
                    <span className={style.guestsTitle}>Rooms</span>
                    <div className={style.guestsSetBtnsContainer}>
                        <button
                            type="button"
                            disabled={guests.room > 1 ? false : true}
                            onClick={() => handleOption('room', 'dec')}
                            className={style.guestsSetBtn}
                        >
                            -
                        </button>
                        <span className={style.guestsQt}>{guests.room}</span>
                        <button
                            type="button"
                            disabled={guests.children < 30 ? false : true}
                            onClick={() => handleOption('room', 'inc')}
                            className={style.guestsSetBtn}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetGuests
