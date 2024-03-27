import { useMutation } from '@tanstack/react-query'
import { postLogin } from 'api'

const useLogin = () => {
  return useMutation({
    mutationFn: postLogin,
    mutationKey: 'login',
  })
}

export default useLogin
