import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from './views/Auth.tsx'
import './index.css'
import {
   BrowserRouter as Router, 
   Routes, 
   Route } from 'react-router-dom'
import { Home } from './views/Home.tsx'
import { About } from './views/About.tsx'
import { Contact } from './views/Contact.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
