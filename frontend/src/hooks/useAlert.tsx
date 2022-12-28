import { useContext, useMemo, useState } from 'react'

import { AlertContext } from '../contexts/Alert/AlertContext'
import { AlertProps } from '../types/Alerts'

type AlertProviderProps = {
  children: React.ReactNode
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<AlertProps>({})

  const defaultContextValue = useMemo(() => {
    return {
      ...alert,
      autoClose: alert.autoClose ?? 5000,
      setAlert
    }
  }, [alert])

  return (
    <AlertContext.Provider
      value={{
        ...defaultContextValue,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

const useAlert = () => useContext(AlertContext)

export { useAlert, AlertProvider }
