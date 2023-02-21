import baseRequest from '../utils/baseRequest'
import { findCartId } from './cartService'

export const addBillingAddress = async (data) => {
  const { firstName, lastName, city, countryCode } = data
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/billing_address`,
      'PUT',
      {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`,
        city: city,
        country_code: countryCode,
        postal_code: '333',
        state_code: '222',
        address1: 'Test',
        phone: '+359877914513'
      }
    )
    return response
  }
}

export const addShipmentMethod = async (data) => {
  const { shippingMethod } = data
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
  const { firstName, lastName, city, countryCode } = data
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/shipments/me/shipping_address `,
      'PUT',
      {
        first_name: firstName,
        last_name: lastName,
        city: city,
        country_code: countryCode
      }
    )
    return response
  }
}

export const addEmail = async (data) => {
  const { email } = data
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(`/baskets/${cartId}/customer`, 'PUT', {
      email: email
    })
    return response
  }
}
