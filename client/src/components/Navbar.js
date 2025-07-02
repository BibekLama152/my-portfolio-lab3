import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', marginRight: '10px' }}>About</Link>
      <Link to="/projects" style={{ color: '#fff', marginRight: '10px' }}>Projects</Link>
      <Link to="/services" style={{ color: '#fff', marginRight: '10px' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
