import { useEffect, useState } from 'react'
import createToken from '../services/authService'

const useAuth = () => {
  const [token, setToken] = useState(null)
  const [customerId, setCustomerId] = useState(null)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    const auth = async () => {
      const { ok, data } = await createToken()
      if (ok) {
        setCustomerId(data.body.customer_id)
        setToken(data.token)
      } else {
        setAuthError(data.message)
      }
    }
    auth()
  }, [])

  return { token, customerId, authError }
}

export default useAuth
