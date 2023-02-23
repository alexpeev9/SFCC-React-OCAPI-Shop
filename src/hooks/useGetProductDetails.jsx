import { useEffect, useState } from 'react'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useGetProductDetails = (id) => {
  const { token } = useTokenContext() // adds token to request
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [productId, setProductId] = useState(id)
  const [attributes, setAttributes] = useState([])
  const [selectedAttributes, setSelectedAttributes] = useState({})
  const [variants, setVariants] = useState([])

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        const { ok, data } = await fetchData(token, {
          method: 'GET',
          url: `/products/${productId}?expand=prices,availability,variations,options`
        })
        if (ok) {
          setData(data)
          if (data.variants && data.variation_attributes) {
            setVariants(data.variants)
            setAttributes(data.variation_attributes)
            setSelectedAttributes(
              data.variation_attributes
                .map((a) => a.id)
                .reduce((accumulator, value) => {
                  return { ...accumulator, [value]: '' }
                }, {})
            )
          }
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, productId])

  return {
    data,
    error,
    setProductId,
    attributes,
    setAttributes,
    selectedAttributes,
    setSelectedAttributes,
    variants
  }
}

export default useGetProductDetails
