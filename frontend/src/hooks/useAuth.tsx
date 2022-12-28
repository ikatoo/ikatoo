import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth/AuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth
