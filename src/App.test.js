import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

jest.mock('lottie-react', () => ({
  Lottie: jest.fn(),
}))

describe('App', () => {
  test('renders main tag and components', () => {
    render(
      <Router>
        <App />
      </Router>,
    )
    expect(screen.getByRole('main')).toBeInTheDocument()

    expect(
      screen.getByRole('navigation', { name: 'navigation-menu-top' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('navigation', { name: 'navigation-menu-sidebar-left' }),
    ).toBeInTheDocument()
  })
})
