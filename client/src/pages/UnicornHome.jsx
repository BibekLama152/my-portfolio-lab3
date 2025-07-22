import React from 'react';

const UnicornHome = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>
        Welcome to <span style={{ color: '#673ab7' }}>MERN Skeleton</span>
      </h1>
      <img
        src="/assets/unicorn.jpg"
        alt="Unicorn"
        style={{
          width: '350px',
          height: 'auto',
          marginTop: '0.5rem',
          borderRadius: '1rem',
        }}
      />
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        A full-stack portfolio app – please sign in or sign up to continue.
      </p>
    </div>
  );
};

export default UnicornHome;
