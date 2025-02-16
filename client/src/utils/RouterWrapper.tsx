import { ReactNode } from "react"
import { MemoryRouter } from "react-router-dom"

interface Props {
    children?: ReactNode
}

export const RouterWrapper = ({ children }: Props) => (
    <MemoryRouter>{children}</MemoryRouter>
)