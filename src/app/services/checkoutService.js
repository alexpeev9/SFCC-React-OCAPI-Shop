import baseRequest from '../utils/baseRequest'
import { findCartId } from './cartService'

export const addShipment = async (data) => {
  const cartId = await findCartId()
  const { firstName, lastName, city, countryCode, shippingMethod } = data
  if (cartId) {
    const response = await baseRequest(`/baskets/${cartId}/shipments`, 'POST', {
      shipping_method: {
        id: shippingMethod
      },
      shipping_address: {
        first_name: firstName,
        last_name: lastName,
        city: city,
        country_code: countryCode
      }
    })
    return response
  }
}

export const createOrder = async () => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(`/orders`, 'POST', {
      basket_id: cartId
    })
    return response
  }
}

export const addPaymentMethod = async () => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(
      `/baskets/${cartId}/payment_instruments`,
      'POST',
      {
        amount: 1.0,
        payment_card: {
          number: '411111111111111',
          security_code: '121',
          holder: 'John Doe',
          card_type: 'Visa',
          expiration_month: 1,
          expiration_year: 2021
        },
        payment_method_id: 'CREDIT_CARD'
      }
    )
    return response
  }
}
