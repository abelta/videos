import { useQuery } from '@tanstack/react-query'
import { getHomeVideos } from 'api'

export default () =>
  useQuery({ queryKey: ['homeVideos'], queryFn: getHomeVideos })
