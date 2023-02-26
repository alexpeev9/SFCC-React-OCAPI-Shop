import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'

const useAddShippingMethod = () => {
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()

  const [error, setError] = useState(null)
  const [shippingMethod, setShippingMethod] = useState(null)

  const addShippingMethod = async (input) => {
    setShippingMethod(input)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && shippingMethod) {
        const { ok, data } = await fetchData(token, {
          method: 'PUT',
          url: `/baskets/${cart.basket_id}/shipments/me/shipping_method`,
          body: {
            id: shippingMethod
          }
        })
        if (ok) {
          setShippingMethod(null)
          setCart(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, shippingMethod])

  return { addShippingMethod, error }
}

export default useAddShippingMethod
