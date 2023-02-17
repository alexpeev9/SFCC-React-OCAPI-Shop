import baseRequest from '../utils/baseRequest'

export const createCart = async (customerId) => {
  const response = await baseRequest('/baskets', 'POST', {
    customer_info: {
      customer_id: customerId
    }
  })
  return response
}

export const createSession = async () => {
  const response = await baseRequest('/sessions', 'POST')
  return response
}
