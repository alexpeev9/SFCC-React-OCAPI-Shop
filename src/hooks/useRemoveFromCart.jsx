import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useRemoveFromCart = () => {
  const navigate = useNavigate()
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()
  const [error, setError] = useState(null)
  const [productId, setProductId] = useState(null)

  const removeFromCart = async (id) => {
    setProductId(id)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && productId) {
        const { ok, data } = await fetchData(token, {
          method: 'DELETE',
          url: `/baskets/${cart.basket_id}/items/${productId}`
        })
        if (ok) {
          setProductId(null)
          setCart(data)
          if (!data.product_items) {
            navigate('/')
          }
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, productId, navigate])

  return { removeFromCart, error }
}

export default useRemoveFromCart
