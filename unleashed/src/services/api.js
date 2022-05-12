import axios from 'axios'

const getToken = () => {
  return new Promise(resolve => {
    resolve(`Bearer $(localStorage.getItem('token) || null)`)
  })
}

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use(async = (config) => {
  config.headers['Authorization'] = await getToken()
  return config
}, function (error) {
  return Promise.reject(error)
})

export default api