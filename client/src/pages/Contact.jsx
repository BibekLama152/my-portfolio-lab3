import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message!");
    navigate('/');
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required /><br /><br />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required /><br /><br />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required /><br /><br />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required /><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
