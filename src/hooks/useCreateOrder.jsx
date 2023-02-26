import { useEffect, useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useCreateOrder = () => {
  const { token } = useTokenContext()
  const { cart, setCart, setCount } = useCartContext()
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
          setOrderNumber(data.order_no)
          setCart(null)
          setCount(0)
          setIsReady(false)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, setCount, isReady])

  return { createOrder, orderNumber, error }
}

export default useCreateOrder
