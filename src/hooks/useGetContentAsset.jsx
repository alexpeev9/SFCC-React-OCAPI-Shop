import { useEffect, useState } from 'react'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useGetContentAsset = (id) => {
  const { token } = useTokenContext()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        const { ok, data } = await fetchData(token, {
          method: 'GET',
          url: `/content/${id}`
        })
        if (ok) {
          setData(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, id])

  return { data, error }
}

export default useGetContentAsset
