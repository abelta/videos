import { useInfiniteQuery } from '@tanstack/react-query'
import { getHomeVideos } from 'api'

const useHomeVideos = () =>
  useInfiniteQuery({
    queryKey: ['homeVideos'],
    queryFn: getHomeVideos,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
  })

export default useHomeVideos
