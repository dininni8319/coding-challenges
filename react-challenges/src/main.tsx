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
import PrivateRoute from './PrivateRoute.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute> 
        }/>
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute> 
        } />
        <Route path="/about" element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute> 
        } />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
