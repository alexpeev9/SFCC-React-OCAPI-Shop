import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useTokenContext } from '../contexts/TokenContext'

const useGetProductImages = (id) => {
  const { token } = useTokenContext()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [productId, setProductId] = useState(id)

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        const { ok, data } = await fetchData(token, {
          method: 'GET',
          url: `/products/${productId}/images`
        })
        if (ok) {
          setData(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, productId])

  return { data, error, setProductId }
}

export default useGetProductImages
