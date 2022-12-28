import { createContext } from 'react'

import { SignInProps } from '../../types/Auth'
import { User } from '../../types/User'

export type AuthContextType = {
  user: User | null
  error: string | null
  signIn: ({ username, email, password }: SignInProps) => Promise<boolean>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
