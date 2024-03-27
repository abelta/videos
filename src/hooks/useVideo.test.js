import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useVideo from './useVideo'
import { getVideoById } from 'api'

jest.mock('api', () => ({
  getVideoById: jest.fn(),
}))

describe('useVideo hook', () => {
  it('should fetch video by id', async () => {
    const id = 'video_id'
    getVideoById.mockResolvedValue(id)

    const queryClient = new QueryClient()
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useVideo({ id }), { wrapper })

    expect(getVideoById).toHaveBeenCalledWith(id)

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
    expect(result.current.data).toEqual(id)
  })
})
