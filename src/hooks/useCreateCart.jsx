import { useTokenContext } from '../contexts/TokenContext'
import { useCartContext } from '../contexts/CartContext'
import { fetchData } from '../services/fetchService'
import { useEffect, useState } from 'react'

const useCreateCart = () => {
  const { token } = useTokenContext()
  const { setCart } = useCartContext()
  const [error, setError] = useState(null)
  const [isCreated, setIsCreated] = useState(false)

  const createCart = async () => {
    setIsCreated(true)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && isCreated) {
        const { ok, data } = await fetchData(token, {
          method: 'POST',
          url: `/baskets`
        })
        if (ok) {
          setCart(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, isCreated, setCart])

  return { createCart, error }
}

export default useCreateCart
