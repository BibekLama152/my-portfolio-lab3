// client/src/auth/api-auth.js

import { API } from '../config'   // your Vite-injected base URL

/**
 * Sign in (login) user.
 * @param {{ email: string, password: string }} user
 * @returns {Promise<object>} JSON response or { error: 'Network error' }
 */
export async function signin(user) {
  try {
    const res = await fetch(`${API}/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    return await res.json()
  } catch (err) {
    return { error: 'Network error' }
  }
}

/**
 * Sign up (register) user.
 * @param {{ name?: string, email: string, password: string }} user
 * @returns {Promise<object>} JSON response or { error: 'Network error' }
 */
export async function signup(user) {
  try {
    const res = await fetch(`${API}/auth/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    return await res.json()
  } catch (err) {
    return { error: 'Network error' }
  }
}
