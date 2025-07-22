import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../auth/auth-helper';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(auth.isAuthenticated());

  useEffect(() => {
    setIsAuth(auth.isAuthenticated());
  }, [location]); // updates on route change

  const handleSignout = () => {
    auth.clearJWT(() => navigate('/signin'));
  };

  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', marginRight: '2rem' }}>MERN Skeleton</span>

      <Link to="/" style={navStyle(location.pathname === '/')}>Home</Link>

      {!isAuth ? (
        <>
          <Link to="/signin" style={navStyle(location.pathname === '/signin')}>Sign In</Link>
          <Link to="/signup" style={navStyle(location.pathname === '/signup')}>Sign Up</Link>
        </>
      ) : (
        <>
          <Link to="/portfolio" style={navStyle(location.pathname === '/portfolio')}>My Portfolio</Link>
          <span onClick={handleSignout} style={{ ...navStyle(false), cursor: 'pointer' }}>Sign Out</span>
        </>
      )}
    </nav>
  );
};

const navStyle = (active) => ({
  color: '#fff',
  marginRight: '1rem',
  textDecoration: active ? 'underline' : 'none'
});

export default Navbar;
