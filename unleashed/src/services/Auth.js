import api from './api'
import jwtDecode from 'jwt-decode'

export const signUp = async (credentials) => {
  try {
    const res = await api.post('/signup', credentials)
    localStorage.setItem('token', res.data.token)
    const user = jwtDecode(res.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    const res = await api.post('/signin', credentials)
    localStorage.setItem('token', res.data.token)
    const user = jwtDecode(res.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('/verify')
    return res.data
  }
  return false
}
