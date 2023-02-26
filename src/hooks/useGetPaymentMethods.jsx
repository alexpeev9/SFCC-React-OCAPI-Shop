import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useTokenContext } from '../contexts/TokenContext'
import { useCartContext } from '../contexts/CartContext'

const useGetPaymentMethods = () => {
  const { token } = useTokenContext()
  const { cart } = useCartContext()

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (token && cart) {
        const { ok, data } = await fetchData(token, {
          method: 'GET',
          url: `/baskets/${cart.basket_id}/payment_methods`
        })
        if (ok) {
          setData(data.applicable_payment_methods[0].cards)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart])

  return { data, error }
}

export default useGetPaymentMethods
