import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useTags from './useTags'
import { getTags } from 'api'

jest.mock('api', () => ({
  getTags: jest.fn(),
}))

describe('useTags hook', () => {
  it('should fetch tags', async () => {
    const tagsData = ['tag1', 'tag2', 'tag3']

    getTags.mockResolvedValue(tagsData)
    const queryClient = new QueryClient()
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useTags(), { wrapper })

    expect(getTags).toHaveBeenCalled()

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
    expect(result.current.data).toEqual(tagsData)
  })
})
