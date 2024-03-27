import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook } from '@testing-library/react'
import { getHomeVideos } from 'api'
import { useHomeVideos } from 'hooks'

jest.mock('api', () => ({
  getHomeVideos: jest.fn(),
}))

describe('useHomeVideos', () => {
  it('is called', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    renderHook(() => useHomeVideos(), {
      wrapper,
    })

    expect(getHomeVideos).toHaveBeenCalled()
  })
})
