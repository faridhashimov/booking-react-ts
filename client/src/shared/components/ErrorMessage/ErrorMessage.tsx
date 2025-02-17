import { FC } from 'react'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
    message?: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return <div className={styles.error}>{message}</div>
}

export default ErrorMessage
