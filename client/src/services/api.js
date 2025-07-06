// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,   // if you ever use cookies/JWT in httpOnly cookie
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
