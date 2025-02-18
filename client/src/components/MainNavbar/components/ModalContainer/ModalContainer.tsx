import { FC } from 'react'
import { ModalItem } from './components'
import { profileModalItems } from './const'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import style from './ModalContainer.module.css'
import styles from './components/ModalItem/ModalItem.module.css'
import { useDispatch } from 'react-redux'
import { logoutUser } from 'store'

export const ModalContainer: FC = () => {
    const dispatch = useDispatch()
    const onLogOut = () => {
        dispatch(logoutUser())
    }

    return (
        <div className={style.profileModalContainer}>
            <ul className={style.profileModalList}>
                {profileModalItems.map((item) => (
                    <ModalItem
                        key={item.itemText}
                        icon={item.icon}
                        itemText={item.itemText}
                        link={item.link}
                    />
                ))}
                <li onClick={onLogOut} className={styles.profileModalItem}>
                    <Link className={styles.profileModalItemLink} to={`/`}>
                        <div className={styles.profileModalItemContainer}>
                            <div className={styles.profileModalItemIcon}>
                                <BiLogOut size={22} />
                            </div>
                            <div
                                className={styles.profileModalItemTextContainer}
                            >
                                <span className={styles.profileModalItemText}>
                                    Sign out
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
