import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import PortfolioLayout from './layouts/PortfolioLayout';
import PrivateRoute from './auth/PrivateRoute';

import UnicornHome from './pages/UnicornHome';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ContactForm from './pages/ContactForm';
import ProjectForm from './pages/ProjectForm';
import QualificationForm from './pages/QualificationForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Always show PublicLayout at the top */}
        <Route element={<PublicLayout />}>
          {/* Public routes */}
          <Route index element={<UnicornHome />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

          {/* Protected portfolio routes */}
          <Route path="portfolio" element={<PrivateRoute />}>
            <Route element={<PortfolioLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="contact-form" element={<ContactForm />} />
              <Route path="project-form" element={<ProjectForm />} />
              <Route path="qualification-form" element={<QualificationForm />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
