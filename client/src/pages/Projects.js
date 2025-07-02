import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {projects.length === 0 ? (
          <p>Loading or no projects available...</p>
        ) : (
          projects.map((project, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              width: '300px',
              backgroundColor: '#f9f9f9'
            }}>
              <img
                src={project.image || '/assets/default.png'}
                alt={project.title}
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
              <h3 style={{ marginTop: '1rem' }}>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
