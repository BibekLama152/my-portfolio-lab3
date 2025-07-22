import { Link, useNavigate, Outlet } from 'react-router-dom';
import auth from '../auth/auth-helper';

const PublicLayout = () => {
  const navigate = useNavigate();
  const isAuth = auth.isAuthenticated();

  const handleSignout = () => {
    auth.clearJWT(() => navigate('/'));
  };

  return (
    <>
      <nav style={{ background: '#333', padding: '1rem' }}>
        <span style={{ color: '#fff', fontWeight: 'bold', marginRight: '2rem' }}>MERN Skeleton</span>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
        {isAuth ? (
          <>
            <Link to="/portfolio" style={{ color: '#fff', marginRight: '1rem' }}>My Portfolio</Link>
            <span
              style={{ color: '#fff', cursor: 'pointer' }}
              onClick={handleSignout}
            >
              Sign Out
            </span>
          </>
        ) : (
          <>
            <Link to="/signin" style={{ color: '#fff', marginRight: '1rem' }}>Sign In</Link>
            <Link to="/signup" style={{ color: '#fff' }}>Sign Up</Link>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default PublicLayout;
