import { useState } from 'react'
import style from './HotelDescription.module.css'

const HotelDescription = ({ desc, hotel }: { desc: string; hotel: string }) => {
    const [expand, setExpand] = useState<boolean>(false)

    return (
        <div className={style.hotelDesc}>
            <h2>Stay in the heart of {hotel}</h2>
            <div>{expand ? desc : `${desc.slice(0, 150)}...`}</div>
            <button
                onClick={() => setExpand(!expand)}
                className={style.readMore}
            >
                Read more
            </button>
        </div>
    )
}

export default HotelDescription
