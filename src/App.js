import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
// import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="navbar-links">
            <NavLink className="navlink" exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" exact activeClassName="active" to="about">
              About
            </NavLink>
            <NavLink className="navlink" exact activeClassName="active" to="contact">
            Contact
            </NavLink>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
