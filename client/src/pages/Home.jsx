import React from 'react';
import { Link } from 'react-router-dom'; // add this at the top

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img
        src="/assets/profile.jpg"
        alt="Bibek Lama"
        style={{
          width: '180px',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          marginBottom: '1rem'
        }}
      />
      <h1>Hello, I'm Bibek Lama</h1>
      <p>Welcome to my portfolio website. I'm a Software Engineering Technology student passionate about Java development and web design.</p>
      <p>Explore my work, see what services I offer, and feel free to get in touch!</p>

    <Link to="/about">
  <button style={{ padding: '0.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}>
    Learn More About Me
  </button>
</Link>

    </div>
  );
};

export default Home;
