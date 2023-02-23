import { createContext, useContext } from 'react'

import useAuth from '../hooks/useAuth'

const AuthContext = createContext([])

export const UseAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const { token, customerId, authError } = useAuth()
  return (
    <AuthContext.Provider value={{ token, customerId, authError }}>
      {children}
    </AuthContext.Provider>
  )
}
