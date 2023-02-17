import baseRequest from '../utils/baseRequest'

export const createCart = async () => {
  const response = await baseRequest('/baskets', 'POST')
  return response
}

export const getCart = async (id) => {
  const response = await baseRequest(`/baskets/${id}`, 'GET')
  return response
}

export const addItemToCart = async (basket_id, product_id, quantity) => {
  const response = await baseRequest(`/baskets/${basket_id}/items`, 'POST', [
    { product_id, quantity }
  ])
  return response
}
