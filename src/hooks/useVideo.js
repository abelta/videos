import { useQuery } from '@tanstack/react-query'
import { getVideoById } from 'api'

const useVideo = id => {
  return useQuery({
    queryKey: ['videoById', id],
    queryFn: () => getVideoById(id),
  })
}

export default useVideo
