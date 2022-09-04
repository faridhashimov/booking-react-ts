import { ReactNode } from 'react'
import style from './Faclities.module.css'

const Facilities = ({
    icon,
    name,
}: {
    icon: ReactNode
    name: string
}) => {
    return (
        <div className={style.facility}>
            <div className={style.facilityIcon}>
                <span>{icon}</span>
            </div>
            <div className={style.facilityName}>{name}</div>
        </div>
    )
}

export default Facilities
