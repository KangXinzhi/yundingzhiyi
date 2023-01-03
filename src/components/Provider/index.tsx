import React from 'react'
import useRem from '@/hooks/useRem'

export interface Context {
  rem: number
}

export const GlobalContext = React.createContext<Context>({} as Context)
const GlobalProvider: React.FC = ({ children }) => {
  const rem = useRem()
  return <GlobalContext.Provider value={{ rem }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
