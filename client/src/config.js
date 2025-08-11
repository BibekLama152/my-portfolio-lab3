// client/src/config.js
const baseApi = import.meta.env.VITE_REACT_APP_API || 'http://localhost:5000/api';

export const API = baseApi;      // used by api-auth.js
export const API_URL = baseApi;  // used by auth-helper.js

console.log('🎯 API base is', baseApi);
