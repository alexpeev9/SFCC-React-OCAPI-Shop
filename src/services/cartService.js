import baseRequest from '../utils/baseRequest'
import { getCustomerId } from './jwtService'

export const createCart = async () => {
  const cartId = await findCartId()
  if (!cartId) {
    const response = await baseRequest('/baskets', 'POST')
    localStorage.setItem('cart_customer', response.customer_info.customer_id)
    localStorage.setItem('cart_id', response.basket_id)
    return response.basket_id
  } else {
    return cartId
  }
}

export const findCartId = async () => {
  let cartId = localStorage.getItem('cart_id')

  if (cartId) {
    const customerId = await getCustomerId()
    const basketCustomer = localStorage.getItem('cart_customer')
    if (basketCustomer === customerId) {
      return cartId
    }
  }
}

export const getCartLength = async () => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(`/baskets/${cartId}`, 'GET')
    return response.product_items ? response.product_items.length : 0
  } else {
    return 0
  }
}

export const addItemToCart = async (product_id, quantity) => {
  const cartId = await createCart()
  const response = await baseRequest(`/baskets/${cartId}/items`, 'POST', [
    {
      product_id,
      quantity
    }
  ])
  return response
}

export const removeItemFromCart = async (product_id) => {
  const cartId = await createCart()
  const response = await baseRequest(
    `/baskets/${cartId}/items/${product_id}`,
    'DELETE'
  )
  return response
}

export const getCartItems = async () => {
  const cartId = await createCart()
  const response = await baseRequest(`/baskets/${cartId}`, 'GET')
  return response
}
