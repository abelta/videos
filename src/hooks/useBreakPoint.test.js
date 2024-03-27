import { fireEvent, renderHook } from '@testing-library/react'
import { useBreakPoint } from 'hooks'

describe('useBreakPoint', () => {
  it('renders properly if window is smaller than 425', () => {
    window.innerWidth = 424
    fireEvent(window, new Event('resize'))

    const { result } = renderHook(() => useBreakPoint())

    expect(result.current.isMobile).toBeTruthy()
  })

  it('renders properly if window is equal or wider than 425 and smaller than 768', () => {
    window.innerWidth = 425
    fireEvent(window, new Event('resize'))

    const { result } = renderHook(() => useBreakPoint())

    expect(result.current.isMobileLarge).toBeTruthy()
  })
})
