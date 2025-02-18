// import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { RouterWrapper } from '../../shared/utils/RouterWrapper'
import MainNavbar from './MainNavbar'

describe('My function or component', () => {
    test('Should render logo correctly', () => {
        render(<MainNavbar />, { wrapper: RouterWrapper })
        const logo = screen.getByRole('link', { name: /fredbooking\.com/i })
        expect(logo).toBeInTheDocument()
    })
})
