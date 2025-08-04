// client/src/config.js

/**
 * Your API base URL:
 * - Uses Vercel-injected VITE_BACKEND_URL in production
 * - Falls back to localhost:5000 in development
 */
const RAW = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
export const API = RAW.endsWith('/api') ? RAW : `${RAW}/api`

// Quick sanity check in the browser console:
console.log('🎯 API base is', API)
