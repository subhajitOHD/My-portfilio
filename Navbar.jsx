import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ }) => {
  // মোবাইল মেনু ওপেন বা ক্লোজ করার জন্য স্টেট
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>Subhajit <span>Developer</span>.</h2>
        </Link>
      </div>

      {/* মেনু লিস্ট: মোবাইলে থাকলে ক্লাস পরিবর্তন হবে */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/certificates">Certificates</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <div className="nav-actions">
        <div className="nav-button">
          <a
            href="https://wa.me/919863614566?text=Hi!%20Thank%20you%20for%20reaching%20out.%20I%20saw%20you're%20interested%20in%20my%20services.%20How%20can%20I%20help%20you%20with%20your%20project%20today?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="talk-btn">Let's Talk</button>
          </a>
        </div>
      </div>

      {/* হ্যামবার্গার মেনু আইকন (শুধু মোবাইলে দেখাবে) */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;