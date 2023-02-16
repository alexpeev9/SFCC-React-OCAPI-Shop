import baseRequest from '../utils/baseRequest'

export const createCart = async (customerId) => {
  const response = await baseRequest('/basket', 'POST', {
    customer_id: customerId
  })
  return response
}

export const checkCart = async (customerId) => {}
