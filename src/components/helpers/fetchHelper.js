const baseURL = process.env.REACT_APP_API_URL

const fetchHelper = (endpoint, data = {}, method = 'POST') => {
    return fetch(`http://${baseURL}${endpoint}`, {
        method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export { fetchHelper } 