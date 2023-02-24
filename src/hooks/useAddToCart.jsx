import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useAddToCart = () => {
  const navigate = useNavigate()
  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()
  const [error, setError] = useState(null)
  const [product, setProduct] = useState({
    id: null,
    quantity: null
  })
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const addToCart = async (quantity, id) => {
    setProduct({ quantity, id })
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && product.id && product.quantity) {
        const { ok, data } = await fetchData(token, {
          method: 'POST',
          url: `/baskets/${cart.basket_id}/items`,
          body: [
            {
              product_id: product.id,
              quantity: product.quantity
            }
          ]
        })
        if (ok) {
          setIsAddedToCart(true)
          setProduct({
            id: null,
            quantity: null
          })
          setCart(data)
          navigate('/cart')
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, setCart, product, navigate])

  return { addToCart, isAddedToCart, error }
}

export default useAddToCart
