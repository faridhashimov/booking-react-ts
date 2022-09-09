import { createPortal } from 'react-dom'

interface Props {
    children: React.ReactNode
}

const Portal = ({ children }: Props) => {
    return createPortal(children, document.body)
}

export default Portal
