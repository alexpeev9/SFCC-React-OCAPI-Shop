import { useEffect, useState } from 'react'
import { useTokenContext } from '../contexts/TokenContext'
import { useCartContext } from '../contexts/CartContext'

import { fetchData } from '../services/fetchService'

const useGetShippingMethods = () => {
  const { token } = useTokenContext()
  const { cart } = useCartContext()

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (token && cart) {
        const { ok, data } = await fetchData(token, {
          method: 'GET',
          url: `/baskets/${cart.basket_id}/shipments/me/shipping_methods`
        })
        if (ok) {
          setData(data.applicable_shipping_methods)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart])

  return { data, error }
}

export default useGetShippingMethods