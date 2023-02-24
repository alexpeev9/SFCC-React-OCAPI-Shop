import { useEffect, useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useAddShippingMethodToCart = () => {
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()
  const [error, setError] = useState(null)
  const [shippingMethod, setShippingMethod] = useState(null)

  const addShippingMethodToCart = async (input) => {
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

  return { addShippingMethodToCart, error }
}

export default useAddShippingMethodToCart
