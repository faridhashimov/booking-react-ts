import { FC } from 'react'
import { createPortal } from 'react-dom'
import style from './Portal.module.css'

interface PortalProps {
    children: React.ReactNode
    showModal: boolean
    setShowModal: (showModal: boolean) => void
}

export const Portal: FC<PortalProps> = ({
    children,
    showModal,
    setShowModal,
}) => {
    return (
        <div
            onClick={() => setShowModal(false)}
            className={`${style.portal} ${
                showModal ? style.open : style.close
            }`}
        >
            {showModal && createPortal(children, document.body)}
        </div>
    )
}
