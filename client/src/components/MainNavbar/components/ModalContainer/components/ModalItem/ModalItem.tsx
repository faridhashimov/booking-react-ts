import { FC } from 'react'
import style from './ModalItem.module.css'
import { Link } from 'react-router-dom'

interface ModalItemProps {
    icon: React.ReactNode
    itemText: string
    link: string
}

export const ModalItem: FC<ModalItemProps> = ({ icon, itemText, link }) => {
    return (
        <li className={style.profileModalItem}>
            <Link className={style.profileModalItemLink} to={`/${link}`}>
                <div className={style.profileModalItemContainer}>
                    <div className={style.profileModalItemIcon}>{icon}</div>
                    <div className={style.profileModalItemTextContainer}>
                        <span className={style.profileModalItemText}>
                            {itemText}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    )
}
