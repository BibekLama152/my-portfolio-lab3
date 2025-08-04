// client/src/config.js

/**
 * Base URL for your API:
 * - In prod, comes from Vercel’s VITE_REACT_APP_API
 * - In dev, falls back to localhost:5000/api
 */
export const API =
  import.meta.env.VITE_REACT_APP_API || 'http://localhost:5000/api';

console.log('🎯 API base is', API);
