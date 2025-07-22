const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

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
