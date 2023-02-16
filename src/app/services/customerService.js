import Cookies from 'js-cookie'
import jwtRequest from '../utils/jwtRequest'

export const setCustomerIdCookie = async () => {
  const response = await jwtRequest() // get header response

  // set cookie
  Cookies.set(
    'customer_id',
    JSON.parse(response.sub).customer_info.customer_id,
    {
      expires: (response.exp - response.iat) / 60 / 60 / 24 // convert to minutes -> hours -> days
    }
  )
  return Cookies.get('customer_id')
}

export const getCustomerIdCookie = () => {
  return Cookies.get('customer_id')
}

export const removeCustomerIdCookie = () => {
  Cookies.remove('customer_id')
}
