import env from '../env'

export const createToken = async () => {
  const body = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-dw-client-id': `${env.headerValue}`
    },
    body: JSON.stringify({ type: 'guest' })
  }

  try {
    let ok, data
    const response = await fetch(`${env.apiUrl}/customers/auth`, body)
    if (response.ok) {
      const token = response.headers.get('authorization') // get token from headers
      // const decodedToken = jwtDecode(token)
      // const expires = (decodedToken.exp - decodedToken.iat) / 60 / 60 / 24 // convert to minutes -> hours -> days || for js-cookie
      const body = await response.json() // get body data
      ok = true
      data = { token, body }
    } else {
      ok = false
      console.log(response.fault.message)
      data = { message: response.fault.message }
    }
    return { ok, data }
  } catch (err) {
    console.log(err.message)
    return { ok: false, data: { message: err.message } }
  }
}
