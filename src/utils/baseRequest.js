import { getJwt } from '../services/jwtService'

const baseRequest = async (url, method, currData) => {
  let body = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: await getJwt()
    },
    body: JSON.stringify(currData)
  }
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API_URL}${url}`, body)
      .then((response) => {
        return response.json()
      })
      .then((data) => resolve(data))
      .catch((e) => reject(e))
  })
}

export default baseRequest
