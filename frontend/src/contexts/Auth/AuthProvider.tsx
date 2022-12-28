import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAlert } from '../../hooks/useAlert'

import auth from '../../services/auth'
import { SignInProps } from '../../types/Auth'
import { User } from '../../types/User'
import { AuthContext } from './AuthContext'
import { setLocalStorageToken } from './setLocalStorageToken'

type AuthProviderProps = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { setAlert } = useAlert()

  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const handlerGithubAuth = async (code: string) => {
      try {
        const data = await auth.githubAuth(code)
        setUser(data.user)
        setLocalStorageToken(data.accessToken)
        navigate('/admin')
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    }

    const code = location.search.split('?code=')[1]

    if (code) {
      handlerGithubAuth(code)
    }
  }, [location.search, navigate])

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('IKATOO_AuthToken')
      if (token) {
        try {
          const data = await auth.siginWithToken(token)
          if (data.user) {
            setUser(data.user)
            location.pathname === '/login'
              ? navigate('/admin')
              : navigate(location.pathname)
          }
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message)
            await auth.signOut()
            setUser(null)
            setLocalStorageToken('')
            navigate('/login')
          }
        }
      }
    }
    validateToken()
  }, [location.pathname, navigate])

  const signIn = async ({ username, email, password }: SignInProps) => {
    const data = await auth.signIn({ username, email, password })
    if (!(data instanceof Error)) {
      setUser(data.user)
      setLocalStorageToken(data.accessToken)
      navigate('/admin')
      return true
    }
    setError(data.message)
    setAlert({
      title: data.message,
      type: 'error'
    })
    return false
  }

  const signOut = async () => {
    await auth.signOut()
    setUser(null)
    setLocalStorageToken('')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, error, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
