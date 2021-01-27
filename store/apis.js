import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://dev.to/api/',
})

export default apiUrl
