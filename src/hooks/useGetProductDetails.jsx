import { useEffect, useState } from 'react'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useGetProductDetails = (id) => {
  const { token } = useTokenContext()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [productId, setProductId] = useState(id)
  const [attributes, setAttributes] = useState(null)
  const [variants, setVariants] = useState(null)
  const [selectedAttributes, setSelectedAttributes] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        const { ok, data } = await fetchData(token, {
          method: 'GET',
          url: `/products/${productId}?expand=prices,availability,variations,options`
        })
        if (ok) {
          setProduct(data)
          if (data.variants && data.variation_attributes) {
            setAttributes(data.variation_attributes)
            setVariants(data.variants)
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
    product,
    error,
    setProductId,
    attributes,
    variants,
    selectedAttributes,
    setSelectedAttributes
  }
}

export default useGetProductDetails
