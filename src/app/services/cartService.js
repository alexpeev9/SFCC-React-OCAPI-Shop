import baseRequest from '../utils/baseRequest'

export const createCart = async () => {
  const response = await baseRequest('/baskets', 'POST')
  return response
}

export const getCart = async (id) => {
  const response = await baseRequest(`/baskets/${id}`, 'GET')
  return response
}
