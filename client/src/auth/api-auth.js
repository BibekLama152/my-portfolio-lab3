// client/src/auth/api-auth.js

/**
 * Base URL for your API.
 * - In production, VITE_BACKEND_URL comes from Vercel (e.g. "https://your-render-url.onrender.com").
 * - In development, defaults to localhost:5000.
 * We append /api so you can call /auth/... without repeating the prefix.
 */
const RAW = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
const API = RAW.endsWith('/api') ? RAW : `${RAW}/api`;

/**
 * Sign in (login) user.
 * @param {{ email: string, password: string }} user
 */
export const signin = async (user) => {
  try {
    const response = await fetch(`${API}/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return { error: 'Network error' };
  }
};

/**
 * Sign up (register) user.
 * @param {{ name?: string, email: string, password: string }} user
 */
export const signup = async (user) => {
  try {
    const response = await fetch(`${API}/auth/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return { error: 'Network error' };
  }
};
