import { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchService'

import { useCartContext } from '../contexts/CartContext'
import { useTokenContext } from '../contexts/TokenContext'

const useAddPayment = () => {
  const { token } = useTokenContext()
  const { cart } = useCartContext()
  const [error, setError] = useState(null)
  const [payment, setPayment] = useState(null)
  const [isPayed, setIsPayed] = useState(false)

  const addPayment = async (data) => {
    setPayment(data)
  }

  useEffect(() => {
    const fetch = async () => {
      if (token && cart && payment) {
        const {
          cardNumber,
          securityCode,
          firstName,
          lastName,
          cardType,
          expirationMonth,
          expirationYear
        } = payment
        const { ok, data } = await fetchData(token, {
          method: 'POST',
          url: `/baskets/${cart.basket_id}/payment_instruments`,
          body: {
            amount: cart.product_total,
            payment_card: {
              number: cardNumber,
              security_code: securityCode,
              holder: `${firstName} ${lastName}`,
              card_type: cardType,
              expiration_month: Number(expirationMonth),
              expiration_year: Number(expirationYear)
            },
            payment_method_id: 'CREDIT_CARD'
          }
        })
        if (ok) {
          setPayment(null)
          setIsPayed(true)
        } else {
          setError(data.message)
        }
      }
    }
    fetch()
  }, [token, cart, payment])

  return { addPayment, isPayed, error }
}

export default useAddPayment
