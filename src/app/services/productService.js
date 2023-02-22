import baseRequest from '../utils/baseRequest'

export const getProduct = async (id) => {
  const response = await baseRequest(
    `/products/${id}?expand=prices,images,availability,variations,options`,
    'GET'
  )
  return response
}
