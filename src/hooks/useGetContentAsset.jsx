import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useTokenContext } from '../contexts/TokenContext'

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
          setData(data.c_body)
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
