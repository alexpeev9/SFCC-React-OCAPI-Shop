import Cookies from 'js-cookie'
import jwtRequest from '../utils/jwtRequest'
import jwtDecode from 'jwt-decode'

export const setJwt = async () => {
  const responseRaw = await jwtRequest() // get jwt raw token
  const responseDecoded = jwtDecode(responseRaw)
  const expires = (responseDecoded.exp - responseDecoded.iat) / 60 / 60 / 24 // convert to minutes -> hours -> days
  Cookies.set('JWT', responseRaw, {
    expires
  })

  return responseRaw
}

export const getJwt = async () => {
  if (Cookies.get('JWT')) {
    return Cookies.get('JWT')
  } else {
    const newJwt = await setJwt()
    return newJwt
  }
}

export const getCustomerId = async () => {
  const response = jwtDecode(await getJwt())
  const customerId = JSON.parse(response.sub).customer_info.customer_id
  return customerId
}
