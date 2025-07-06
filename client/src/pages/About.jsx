import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2>About Me</h2>
      <p>
        I'm <strong>Bibek Lama</strong>, currently studying Software Engineering Technology at Centennial College, Toronto.
        I enjoy building applications that solve real problems, and I love exploring both backend logic and user-friendly interfaces.
      </p>
      <p>
        My skills include Java programming, object-oriented design, and developing small desktop applications. I'm also learning web technologies to expand my capabilities.
      </p>
      <p>
        I’m looking forward to internship opportunities where I can grow and contribute meaningfully to a team.
      </p>
      <p>
        <a
  href="/assets/Bibek_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  📄 View My Resume
</a>

      </p>
    </div>
  );
};

export default About;
