import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

describe('App', () => {
  test('renders react links', async () => {
    render(
      <Router>
        <App />
      </Router>,
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/video 1/i)).toBeInTheDocument()
  })
})
