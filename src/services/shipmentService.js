import baseRequest from '../utils/baseRequest'
import { findCartId } from './cartService'

export const addEmail = async (email) => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(`/baskets/${cartId}/customer`, 'PUT', {
      email: email
    })
    return response
  }
}

export const addShipmentMethod = async (shippingMethod) => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/shipments/me/shipping_method`,
      'PUT',
      {
        id: shippingMethod
      }
    )
    return response
  }
}

export const addShipmentAddressInfo = async (data) => {
  const { firstName, lastName, city, address, countryCode } = data
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/shipments/me/shipping_address`,
      'PUT',
      {
        first_name: firstName,
        last_name: lastName,
        address1: address,
        city: city,
        country_code: countryCode
      }
    )
    return response
  }
}

export const addBillingAddress = async (data) => {
  const { firstName, lastName, city, address, countryCode } = data
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/billing_address`,
      'PUT',
      {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`,
        address1: address,
        city: city,
        country_code: countryCode
      }
    )
    return response
  }
}

export const getShippingMethods = async () => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/shipments/me/shipping_methods`,
      'GET'
    )
    return response.applicable_shipping_methods
  }
}
