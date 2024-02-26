import { useQuery } from '@tanstack/react-query'
import { getTags } from 'api'

const useTags = () => {
  return useQuery({ queryKey: ['tags'], queryFn: getTags })
}

export default useTags
