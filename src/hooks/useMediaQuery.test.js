import { renderHook } from '@testing-library/react'
import useMediaQuery from './useMediaQuery'

global.matchMedia = jest.fn()

describe('useMediaQuery hook', () => {
  it('should return true when media query matches', () => {
    global.matchMedia.mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
    }))

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    expect(result.current).toBe(true)
  })

  it('should return false when media query does not match', () => {
    global.matchMedia.mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
    }))

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    expect(result.current).toBe(false)
  })
})
