import baseRequest from '../utils/baseRequest'
import { findCartId } from './cartService'

export const addPaymentMethod = async (data) => {
  const {
    cardNumber,
    securityCode,
    holder,
    cardType,
    expirationMonth,
    expirationYear
  } = data
  const cartId = await findCartId()
  if (cartId) {
    const basket = await baseRequest(`/baskets/${cartId}`, 'GET')

    const response = await baseRequest(
      `/baskets/${cartId}/payment_instruments`,
      'POST',
      {
        amount: basket.product_total,
        payment_card: {
          number: cardNumber,
          security_code: securityCode,
          holder: holder,
          card_type: cardType,
          expiration_month: Number(expirationMonth),
          expiration_year: Number(expirationYear)
        },
        payment_method_id: 'CREDIT_CARD'
      }
    )
    return response
  }
}

export const createOrder = async () => {
  const cartId = await findCartId()
  if (cartId) {
    const response = await baseRequest(`/orders`, 'POST', {
      basket_id: cartId
    })
    if (response._type === 'order') {
      localStorage.removeItem('cart_customer')
      localStorage.removeItem('cart_id')
    }
    return response
  }
}
