import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchData } from '../services/fetchService'

import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'

const useAddItemToCart = () => {
  const navigate = useNavigate()

  const { token } = useTokenContext()
  const { cart, setCart } = useCartContext()

  const [error, setError] = useState(null)
  const [product, setProduct] = useState(null)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const addItemToCart = async (quantity, id) => {
    setProduct({ quantity, id })
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && product) {
        const { id, quantity } = product
        const { ok, data } = await fetchData(token, {
          method: 'POST',
          url: `/baskets/${cart.basket_id}/items`,
          body: [
            {
              product_id: id,
              quantity: quantity
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

  return { addItemToCart, isAddedToCart, error }
}

export default useAddItemToCart
