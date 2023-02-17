import baseRequest from '../utils/baseRequest'
import { getCustomerId } from './jwtService'

export const createCart = async () => {
  const cartId = await getCartId()
  if (!cartId) {
    const response = await baseRequest('/baskets', 'POST')
    localStorage.setItem('cart_customer', response.customer_info.customer_id)
    localStorage.setItem('cart_id', response.basket_id)
    return response.basket_id
  } else {
    return cartId
  }
}

export const getCartId = async () => {
  const customerId = await getCustomerId()
  const basketCustomer = localStorage.getItem('cart_customer')
  let cartId = localStorage.getItem('cart_id')

  if (basketCustomer === customerId && cartId) {
    return cartId
  }
}

export const getCartLength = async () => {
  const cartId = await getCartId()
  if (cartId) {
    const response = await baseRequest(`/baskets/${cartId}`, 'GET')
    return response.product_items.length
  } else {
    return 0
  }
}

export const addItemToCart = async (basket_id, product_id, quantity) => {
  const response = await baseRequest(`/baskets/${basket_id}/items`, 'POST', [
    {
      product_id,
      quantity
    }
  ])
  return response
}
