import { useEffect, useState } from 'react'
import { getCustomerId } from '../services/jwtService'

const useCustomerIdHook = () => {
  const [customerId, setCustomerId] = useState(null)
  useEffect(() => {
    const verifyUser = async () => {
      const customer_id = await getCustomerId()
      setCustomerId(customer_id)
    }
    verifyUser()
  }, [])
  return customerId
}

export default useCustomerIdHook
