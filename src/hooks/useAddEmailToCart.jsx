import { useEffect, useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useAddEmailToCart = () => {
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)

  const addEmailToCart = async (input) => {
    setEmail(input)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && email) {
        const { ok, data } = await fetchData(token, {
          method: 'PUT',
          url: `/baskets/${cart.basket_id}/customer`,
          body: {
            email: email
          }
        })
        if (ok) {
          setEmail(null)
          setCart(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, email])

  return { addEmailToCart, error }
}

export default useAddEmailToCart
