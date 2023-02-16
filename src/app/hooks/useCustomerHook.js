import { useEffect, useState } from 'react'
import {
  getCustomerIdCookie,
  setCustomerIdCookie
} from '../services/customerService'

const useCustomerHook = () => {
  const [customerId, setCustomerId] = useState(getCustomerIdCookie()) // get id from cookie
  useEffect(() => {
    const verifyUser = async () => {
      if (!getCustomerIdCookie()) {
        const cookieValue = await setCustomerIdCookie() // if cookie has expired, get new id
        setCustomerId(cookieValue) // add to state
      }
    }
    verifyUser()
  }, [])
  return customerId
}

export default useCustomerHook
