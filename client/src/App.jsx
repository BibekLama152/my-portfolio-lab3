// src/App.jsx

import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout'
import PortfolioLayout from './layouts/PortfolioLayout'
import PrivateRoute from './auth/PrivateRoute'

// —— Lazy‐load all your pages —— //
const UnicornHome       = lazy(() => import('./pages/UnicornHome'))
const Signin            = lazy(() => import('./pages/Signin'))
const Signup            = lazy(() => import('./pages/Signup'))
const Home              = lazy(() => import('./pages/Home'))
const About             = lazy(() => import('./pages/About'))
const Projects          = lazy(() => import('./pages/Projects'))
const Services          = lazy(() => import('./pages/Services'))
const Contact           = lazy(() => import('./pages/Contact'))
const ContactForm       = lazy(() => import('./pages/ContactForm'))
const ProjectForm       = lazy(() => import('./pages/ProjectForm'))
const QualificationForm = lazy(() => import('./pages/QualificationForm'))

function App() {
  return (
    <Router>
      {/* Wrap all your <Routes> in Suspense for a loading fallback */}
      <Suspense fallback={<div>Loading page…</div>}>
        <Routes>
          {/* Public shell */}
          <Route element={<PublicLayout />}>
            <Route index element={<UnicornHome />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />

            {/* Protected portfolio area */}
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
                <Route
                  path="qualification-form"
                  element={<QualificationForm />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
