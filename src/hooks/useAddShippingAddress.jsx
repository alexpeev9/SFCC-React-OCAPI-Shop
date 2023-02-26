import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'

const useAddShippingAddress = () => {
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()

  const [error, setError] = useState(null)
  const [shippingAddress, setShippingAddress] = useState(null)

  const addShippingAddress = async (data) => {
    setShippingAddress(data)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && shippingAddress) {
        const { firstName, lastName, address, city, phone, countryCode } =
          shippingAddress
        const { ok, data } = await fetchData(token, {
          method: 'PUT',
          url: `/baskets/${cart.basket_id}/shipments/me/shipping_address`,
          body: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            address1: address,
            city: city,
            country_code: countryCode
          }
        })
        if (ok) {
          setShippingAddress(null)
          setCart(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, shippingAddress])

  return { addShippingAddress, error }
}

export default useAddShippingAddress
