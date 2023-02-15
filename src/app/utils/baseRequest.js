const baseRequest = async (url, method, currData) => {
    let body = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'x-dw-client-id': `${process.env.REACT_APP_HEADER_VALUE}`,
        },
        body: JSON.stringify(currData)
    }
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`, body)
            .then(data => data.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    })
}

export default baseRequest