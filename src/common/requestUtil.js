export function makeRequest({url, method, body}) {
    const token = localStorage.getItem('token') || "no token";

    return fetch(`${process.env.REACT_APP_SERVER_URL}/api/${url}`, {
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        method: method || 'GET'
    }).then(response => {
        if (response.status === 401 || response.status === 403) {
            throw response.json();
        }
        else if (response.status === 202) {
            return response;
        }else {
            return response.json()
        }
    })
}