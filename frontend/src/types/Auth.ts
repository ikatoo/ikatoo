import { User } from './User'

export type AuthResponseType = {
  user: Omit<User, 'password'>
  accessToken: string
  refreshToken: string
}

export type SignInProps = {
  password: string
  username?: string
  email?: string
}
