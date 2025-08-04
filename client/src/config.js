// client/src/config.js

/**
 * Base URL for your backend:
 * - Uses Vercel’s VITE_BACKEND_URL in production
 * - Falls back to localhost:5000 in development
 */
export const API =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
