import useFetch from './useFetch'

const useGetContentAsset = (id) => {
  return useFetch('GET', `/content/${id}`)
}

export default useGetContentAsset
