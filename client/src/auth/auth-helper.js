// client/src/auth/auth-helper.js
import { API_URL } from '../config.js' // go up one level

const auth = {
  authenticate(jwt, cb) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    }
    cb()
  },

  isAuthenticated() {
    if (typeof window === 'undefined') return false
    const jwt = sessionStorage.getItem('jwt')
    return jwt ? JSON.parse(jwt) : false
  },

  clearJWT(cb) {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('jwt')
    }
    cb()
    fetch(`${API_URL}/auth/signout`, { method: 'GET' })
      .catch(console.error)
  }
}

export default auth
