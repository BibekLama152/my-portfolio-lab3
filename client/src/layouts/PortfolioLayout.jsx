import { Link, Outlet } from 'react-router-dom';

const PortfolioLayout = () => {
  return (
    <>
      <nav style={{ background: '#555', padding: '0.5rem', display: 'flex', gap: '1rem' }}>
        <Link to="/portfolio/about" style={{ color: '#fff' }}>About</Link>
        <Link to="/portfolio/projects" style={{ color: '#fff' }}>Projects</Link>
        <Link to="/portfolio/services" style={{ color: '#fff' }}>Services</Link>
        <Link to="/portfolio/contact" style={{ color: '#fff' }}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default PortfolioLayout;
