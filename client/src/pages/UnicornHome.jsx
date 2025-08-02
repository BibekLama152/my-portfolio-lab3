// src/pages/UnicornHome.jsx

import React from 'react';

const UnicornHome = () => {
  const imgStyles = {
    height: 'auto',
    marginTop: '0.5rem',
    borderRadius: '1rem',
  };

  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>
        Welcome to <span style={{ color: '#673ab7' }}>MERN Skeleton</span>
      </h1>

      <picture>
        {/* WebP source for modern browsers */}
        <source
          srcSet="/assets/unicorn.webp"
          type="image/webp"
        />
        {/* JPEG fallback */}
        <img
          src="/assets/unicorn.jpg"
          alt="Unicorn"
          width={350}
          loading="lazy"
          style={imgStyles}
        />
      </picture>

      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        A full-stack portfolio app – please sign in or sign up to continue.
      </p>
    </div>
  );
};

export default UnicornHome;
