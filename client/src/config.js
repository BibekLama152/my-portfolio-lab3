// client/src/config.js

/**
 * Base URL for your API, injected at build time by Vite/Vercel.
 * Falls back to localhost in development.
 */
export const API =
  import.meta.env.VITE_REACT_APP_API || 'http://localhost:5000/api';
