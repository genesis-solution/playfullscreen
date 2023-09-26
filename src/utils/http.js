import axios from 'axios'

export const request = function ({method, url, data, token}) {
  return axios({
    method,
    url,
    data,   
    headers: {
      'Authorization': `Basic ${token}`
    }
  })
}
