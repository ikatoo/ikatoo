import { createContext, Dispatch, SetStateAction } from 'react'
import { AlertProps } from '../../types/Alerts'

export type AlertContextProps = AlertProps & {
  setAlert: Dispatch<SetStateAction<AlertProps>>
}

export const AlertContext = createContext({
  autoClose: 5000
} as AlertContextProps)
