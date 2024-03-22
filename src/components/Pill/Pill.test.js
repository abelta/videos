import { screen, render } from '@testing-library/react'
import { Pill } from 'components'

jest.mock('lottie-react', () => ({
  Lottie: jest.fn(),
}))

describe('Pill', () => {
  it('renders', () => {
    render(<Pill>Test</Pill>)
    expect(screen.getByTestId('pill')).toBeInTheDocument()
  })

  describe('param children', () => {
    it('renders with appropriate text', () => {
      render(<Pill>Test</Pill>)
      expect(screen.getByText('Test')).toBeInTheDocument()
    })
  })

  describe('param style', () => {
    it('renders with passed on style', () => {
      render(<Pill style={{ color: 'red' }}>Test</Pill>)
      expect(screen.getByTestId('pill')).toHaveStyle('color: red')
    })
  })
})
