import env from '../env'

export const fetchData = async (token, input) => {
  const body = {
    method: input.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    },
    body: input.body ? JSON.stringify(input.body) : null
  }

  try {
    let ok, data
    const response = await fetch(`${env.apiUrl}${input.url}`, body)
    if (response.ok) {
      ok = true
      data = await response.json()
    } else {
      console.log(response.fault.message)
      ok = false
      data = { message: response.fault.message }
    }
    return { ok, data }
  } catch (err) {
    console.log(err.message)
    return { ok: false, data: { message: err.message } }
  }
}
