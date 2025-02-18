import { FC } from 'react'
import styles from './ProfileButton.module.css'
import { User } from 'store'

interface ProfileButtonProps {
    user: User | null
    setShowModal: (showModal: boolean) => void
    showModal: boolean
}

export const ProfileButton: FC<ProfileButtonProps> = ({
    user,
    setShowModal,
    showModal,
}) => {
    return (
        <div
            onClick={() => setShowModal(!showModal)}
            className={styles.profileButton}
        >
            <div className={styles.profileUserLetter}>
                {user?.name.slice(0, 1)}
            </div>
            <div className={styles.profileUserInfo}>
                <span
                    className={styles.profileUserName}
                >{`${user?.name} ${user?.surname}`}</span>
                <span className={styles.profileUserLevel}>Genius Level 1</span>
            </div>
        </div>
    )
}
