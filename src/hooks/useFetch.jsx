import { useEffect, useState } from 'react'
import { useTokenContext } from '../contexts/TokenContext'
import { fetchData } from '../services/fetchService'

const useFetch = (method, url, body) => {
  const { token } = useTokenContext() // adds token to request
  const [params, setParams] = useState({ method, url, body })

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (token) {
        const { ok, data } = await fetchData(token, params)
        if (ok) {
          setData(data)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, params])

  return { data, error, setParams }
}

export default useFetch
