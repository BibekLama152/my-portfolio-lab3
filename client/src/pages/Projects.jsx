// client/src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';         // ← new

const fallbackData = [
  {
    title: "Lotto Game (Java GUI)",
    image: "/assets/LottoGame.png",
    description:
      "Created a GUI-based Lotto game using Java Swing (JOptionPane)…",
  },
  {
    title: "Song Library Filter (Java Console App)",
    image: "/assets/SongDemo.png",
    description:
      "Built a song management system using enums and file input…",
  },
  {
    title: "Java Quiz Game (Test App)",
    image: "/assets/Test.png",
    description:
      "Developed a multiple-choice quiz game using Java and JOptionPane…",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get('/projects')                   // ← calls http://localhost:5000/api/projects
      .then(({ data }) => {
        // if API returned anything, show it; otherwise fall back
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackData);
        }
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setProjects(fallbackData);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Projects</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              width: "300px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
            <h3 style={{ marginTop: "1rem" }}>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
