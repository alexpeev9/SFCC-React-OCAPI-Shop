import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'

const useAddBillingAddress = () => {
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()

  const [error, setError] = useState(null)
  const [billingAddress, setBillingAddress] = useState(null)

  const addBillingAddress = async (data) => {
    setBillingAddress(data)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && billingAddress) {
        const { firstName, lastName, address, city, phone, countryCode } =
          billingAddress
        const { ok, data } = await fetchData(token, {
          method: 'PUT',
          url: `/baskets/${cart.basket_id}/billing_address`,
          body: {
            first_name: firstName,
            last_name: lastName,
            address1: address,
            city: city,
            phone: phone,
            country_code: countryCode
          }
        })
        if (ok) {
          setBillingAddress(null)
          setCart(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, billingAddress])

  return { addBillingAddress, error }
}

export default useAddBillingAddress
