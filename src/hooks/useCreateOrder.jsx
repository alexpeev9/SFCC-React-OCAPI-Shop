import { useEffect, useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useCreateOrder = () => {
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()
  const [error, setError] = useState(null)
  const [orderNumber, setOrderNumber] = useState(null)
  const [isReady, setIsReady] = useState(false)

  const createOrder = async () => {
    setIsReady(true)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && isReady) {
        const { ok, data } = await fetchData(token, {
          method: 'POST',
          url: `/orders`,
          body: {
            basket_id: `${cart.basket_id}`
          }
        })
        if (ok) {
          setIsReady(false)
          setOrderNumber(data.order_no)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, isReady])

  return { createOrder, orderNumber, error }
}

export default useCreateOrder
