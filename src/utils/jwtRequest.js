const jwtRequest = async () => {
  let body = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-dw-client-id': `${process.env.REACT_APP_HEADER_VALUE}`
    },
    body: JSON.stringify({ type: 'guest' })
  }

  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API_URL}/customers/auth`, body)
      .then((response) => {
        return response.headers.get('authorization')
      })
      .then((data) => resolve(data))
      .catch((e) => reject(e))
  })
}

export default jwtRequest
