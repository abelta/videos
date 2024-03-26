import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationTop from './NavigationTop'

describe('NavigationTop', () => {
  test('renders nav tag', async () => {
    render(
      <Router>
        <NavigationTop />
      </Router>,
    )
    const navElement = await screen.findByRole('navigation')
    expect(navElement).toBeInTheDocument()
  })

  test('calls setMenuOpen when menu-burguer is clicked', () => {
    const mockSetMenuOpen = jest.fn()
    render(
      <Router>
        <NavigationTop setMenuOpen={mockSetMenuOpen} />
      </Router>,
    )

    const btnBurguer = screen.getByRole('button', { name: 'menu-burguer' })
    expect(btnBurguer).toBeInTheDocument()

    fireEvent.click(btnBurguer)
    expect(mockSetMenuOpen).toHaveBeenCalled()
  })

  test('renders icon kebab when user is logged', () => {
    render(
      <Router>
        <NavigationTop isLogged={false} />
      </Router>,
    )

    expect(screen.getByText('Icon Kebab')).toBeInTheDocument()
  })

  test('renders icon create when user is logged', () => {
    render(
      <Router>
        <NavigationTop isLogged={true} />
      </Router>,
    )

    expect(screen.getByText('Icon Create')).toBeInTheDocument()
  })

  test('renders icon notification when screen is wider than 425 and user is logged', () => {
    window.innerWidth = 500
    fireEvent(window, new Event('resize'))

    render(
      <Router>
        <NavigationTop isLogged={true} />
      </Router>,
    )

    expect(screen.getByText('Icon Notification')).toBeInTheDocument()
  })

  test('renders login button when user is not logged', () => {
    render(
      <Router>
        <NavigationTop isLogged={false} />
      </Router>,
    )

    expect(screen.getByText('Inicio sesión')).toBeInTheDocument()
  })
})
