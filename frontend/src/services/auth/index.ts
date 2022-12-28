import { AuthResponseType, SignInProps } from '../../types/Auth'
import api from '../api'

const githubAuth = async (code: string) => {
  const response = await api.post<AuthResponseType>('/auth/github', {
    code
  })
  return response.data
}

const siginWithToken = async (token: string) => {
  const response = await api.post<AuthResponseType>(
    '/auth/access-token',
    {},
    {
      headers: {
        Authorization: `bearer ${token}`
      }
    }
  )
  return response.data
}

const signIn = async ({ username, email, password }: SignInProps) => {
  try {
    const response = await api.post<AuthResponseType>('/auth', {
      email,
      username,
      password
    })

    return response.data
  } catch (error) {
    if (error instanceof Error) return error
    return Error('Unknow error')
  }
}

const signOut = async () => {
  // await api.post('/auth/signout')
  return
}

export default {
  githubAuth,
  siginWithToken,
  signIn,
  signOut
}
