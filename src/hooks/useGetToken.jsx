import { useEffect, useState } from 'react'

import { createToken } from '../services/fetchService'

const useGetToken = () => {
  const [token, setToken] = useState(null)
  const [customerId, setCustomerId] = useState(null)
  const [tokenError, setTokenError] = useState(null)

  useEffect(() => {
    const getToken = async () => {
      if (!token) {
        const { ok, data } = await createToken()
        if (ok) {
          setCustomerId(data.body.customer_id)
          setToken(data.token)
        } else {
          setTokenError(data.message)
        }
      }
    }
    getToken()
  }, [token])

  return { token, customerId, tokenError }
}

export default useGetToken
