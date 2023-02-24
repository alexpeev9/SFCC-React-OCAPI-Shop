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
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${input.url}`,
      body
    )
    if (response.ok) {
      ok = true
      data = await response.json()
    } else {
      ok = false
      data = { message: response.fault.message }
    }
    return { ok, data }
  } catch (err) {
    return { ok: false, data: { message: err.message } }
  }
}
