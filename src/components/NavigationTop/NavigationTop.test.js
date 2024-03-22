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

    const firstButton = screen.getByRole('button', { name: 'menu-burguer' })
    expect(firstButton).toBeInTheDocument()

    fireEvent.click(firstButton)
    expect(mockSetMenuOpen).toHaveBeenCalled()
  })
})