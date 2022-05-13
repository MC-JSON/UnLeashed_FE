import axios from 'axios'

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer $(localStorage.getItem('token) || null)`)
  })
}

const api = axios.create({
  baseURL: 'https://whispering-dawn-47473.herokuapp.com/'
})

api.interceptors.request.use(
  async function (config) {
    config.headers['Authorization'] = await getToken()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api
