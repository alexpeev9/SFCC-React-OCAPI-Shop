import { createContext, useContext } from 'react'

import useGetToken from '../hooks/useGetToken'

const TokenContext = createContext(null)

export const useTokenContext = () => useContext(TokenContext)

export const TokenProvider = ({ children }) => {
  const { token, customerId, tokenError } = useGetToken()
  return (
    <TokenContext.Provider value={{ token, customerId, tokenError }}>
      {children}
    </TokenContext.Provider>
  )
}
