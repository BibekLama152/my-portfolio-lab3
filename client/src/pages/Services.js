import React from 'react';

const services = [
  {
    title: "Java Programming",
    image: "/assets/java.png",
    description: "I can create console or GUI-based Java applications, including games, quizzes, or utilities."
  },
  {
    title: "OOP Design & Logic",
    image: "/assets/oop.png",
    description: "Build clean, object-oriented solutions in Java using proper class structure, enums, and reusable logic."
  },
  {
    title: "Basic Web Development",
    image: "/assets/web.png",
    description: "Able to create static websites using HTML, CSS, and basic JavaScript, and deploy them online."
  }
];

const Services = () => {
  return (
    <div>
      <h2>My Services</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
            <img src={service.image} alt={service.title} style={{ width: '100%' }} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
