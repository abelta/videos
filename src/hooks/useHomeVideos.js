import { useInfiniteQuery } from '@tanstack/react-query'
import { getHomeVideos } from 'api'

export default () =>
  useInfiniteQuery({
    queryKey: ['homeVideos'],
    queryFn: getHomeVideos,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
  })
